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

//* Import modules
import { RouterCore, TopNavigator } from './src/core/navigate';
import { ThemeCoreSingleton } from './src/core/design';
import { BottomNavigator } from './src/core/navigate';

//* Import configs
import routeConfig from './src/configs/routeConfig';
import themeSheet from './src/configs/themes/themeSheet';
import navigatorConfig from './src/configs/navigatorConfig';

//* Init themeCore
ThemeCoreSingleton.setTheme(themeSheet)

//* App
const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: "red",
	};

	return (
	<SafeAreaView style={{backgroundColor: "white", height: "100%"}}>
		<StatusBar
			barStyle={isDarkMode ? 'light-content' : 'dark-content'}
			backgroundColor={backgroundStyle.backgroundColor}
		/>

		<MemoryRouter>
			<View style={{flex: 1}}>
				<TopNavigator />

				<ScrollView style={{height: "100%"}}>
					<RouterCore 
						routeTree={routeConfig}
					/>
				</ScrollView>

				<BottomNavigator 
					menu={navigatorConfig.menu}
				/>
			</View>
		</MemoryRouter>
	</SafeAreaView>
	
	);
}

export default App;