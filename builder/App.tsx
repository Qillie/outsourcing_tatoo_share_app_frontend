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

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from './src/core/base/ReduxCore';

//* Import modules
import { RouterCore, TopNavigator } from './src/core/navigate';
import { ThemeCoreSingleton } from './src/core/design';
import { BottomNavigator } from './src/core/navigate';

//* Import configs
import routeConfig from './src/configs/routeConfig';
import themeSheet from './src/configs/themes/themeSheet';
import navigatorConfig from './src/configs/navigatorConfig';
import { TReduxRootState } from './src/core/base/ReduxCore/ReduxCore';
import TopNavigatorSlice from './src/core/navigate/TopNavigator/components/TopNavigatorSlice';


//* Init themeCore
ThemeCoreSingleton.setTheme(themeSheet)

const ReduxContainer = () => {
	//* Modules
	const dispatch = useDispatch()
	const topNavigatorState = useSelector<TReduxRootState>(state => state.topNavigator)
	
	const label = useSelector((state: TReduxRootState) => {
		return state.topNavigator.label
	})
	
	const actions = TopNavigatorSlice.actions

	return (
		<View style={{flex: 1}}>
			<TopNavigator 
				label={label}
			/>

			
			<RouterCore 
				routeTree={routeConfig}
			/>

			<BottomNavigator 
				menu={navigatorConfig.menu}
				onClickNavBtnCallback={
					(label) => {
						dispatch(actions.setLabel({label: label}))
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

			<SafeAreaView style={{flex: 1, backgroundColor: ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "200")}}>
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