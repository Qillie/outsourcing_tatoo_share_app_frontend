//* Import libraries
import React, {type PropsWithChildren} from 'react';
import { Link, NativeRouter, MemoryRouter } from "react-router-native";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';
import { useNavigate } from 'react-router-native';

import { Provider, useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from './src/core/base/ReduxCore';

//* Import modules
import { RouterCore, TopNavigator } from './src/core/navigate';
import { ThemeCoreSingleton } from './src/core/design';
import { BottomNavigator } from './src/core/navigate';
import Communicator from './src/core/base/Communicator/Communicator';

//* Import configs
import routeConfig from './src/configs/routeConfig';
import themeSheet from './src/configs/themes/themeSheet';
import navigatorConfig from './src/configs/navigatorConfig';
import { TReduxRootState } from './src/core/base/ReduxCore/ReduxCore';

//* Import redux slices
import TopNavigatorSlice from './src/core/navigate/TopNavigator/components/TopNavigatorSlice';
import UserTypeSlice from './src/modules/ReduxContainer/UserTypeSlice';
import UserAuthSlice from './src/modules/ReduxContainer/UserAuthSlice';


//* Init themeCore
ThemeCoreSingleton.setTheme(themeSheet)

const ReduxContainer = () => {
	//* Modules
	const communicator = new Communicator()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const topNavigatorState = useSelector<TReduxRootState>(state => state.topNavigator)
	
	/**
	 * Redux slices
	 */
	//* Top navigator
	const topNavigatorAction = TopNavigatorSlice.actions
	const label = useSelector((state: TReduxRootState) => {
		return state.topNavigator.label
	})

	//* User type
	const userTypeAction = UserTypeSlice.actions
	const userType = useSelector((state: TReduxRootState) => {
		return state.userType.type
	})

	//* User auth
	const userAuthAction = UserAuthSlice.actions
	const userAuth = useSelector((state: TReduxRootState) => {
		return {accessToken: state.userAuth.accessToken, refreshToken: state.userAuth.refreshToken} 
	})

	/**
	 * Hook to check auth
	 */
	React.useEffect(() => {
		communicator.getMultipleDataInSecureStore(["accessToken", "refreshToken"]).then((dataSet) => {
			if (dataSet[0].value !== null && dataSet[1].value) {
				userAuthAction.setUserAuth({
					accessToken: dataSet[0].value,
					refreshToken: dataSet[1].value
				})
			} else {
				navigate("/sign_in")
			}
		})
	}, [])
	
	return (
		<View style={{flex: 1}}>
			<TopNavigator 
				label={label}
			/>
			
			<RouterCore 
				routeTree={routeConfig}
				outerArg={
					{
						settings: {
							userType: userType,
							setUserType: (type: "user" | "tattooist") => {
								dispatch(userTypeAction.setUserType({type: type}))
							}
						}
					}
				}
			/>

			<BottomNavigator
				menu={(userType != "user") ? navigatorConfig.userMenu : navigatorConfig.tattooistMenu}
				onClickNavBtnCallback={
					(label) => {
						dispatch(topNavigatorAction.setLabel({label: label}))
					}
				}
			/>
		</View>
	)
}

//* App
const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: "white",
	};

	return (
		<React.Fragment>
			<SafeAreaView style={{ flex:0, backgroundColor: 'white' }} />

			<SafeAreaView style={{flex: 1, backgroundColor: ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "100")}}>
				<View style={{backgroundColor: "white", width: "100%", height: "100%"}}>
					<StatusBar
						barStyle={isDarkMode ? 'light-content' : 'dark-content'}
						backgroundColor={backgroundStyle.backgroundColor}
					/>

					<MemoryRouter>
						<Provider store={ReduxStore}>
							<ReduxContainer />
						</Provider>
					</MemoryRouter>
				</View>
			</SafeAreaView>
		</React.Fragment>
	
	);
}

export default App;