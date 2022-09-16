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

//* Import configs
import routeConfig from './src/configs/routeConfig';

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
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});

export default App;