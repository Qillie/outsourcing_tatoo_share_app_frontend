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
import { RouterCore } from './src/core/navigate';
import { ThemeCoreSingleton } from './src/core/design';

//* Import configs
import routeConfig from './src/configs/routeConfig';
import themeSheet from './src/configs/themes/themeSheet';

//* Init themeCore
ThemeCoreSingleton.setTheme(themeSheet)

//* App
const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
	<SafeAreaView style={backgroundStyle}>
		<StatusBar
			barStyle={isDarkMode ? 'light-content' : 'dark-content'}
			backgroundColor={backgroundStyle.backgroundColor}
		/>

		<Header />
		
		<ScrollView
			style={backgroundStyle}
		>
			<MemoryRouter>
				<RouterCore 
					routeTree={routeConfig}
				/>
			</MemoryRouter>
		</ScrollView>
	</SafeAreaView>
	
	);
}

export default App;