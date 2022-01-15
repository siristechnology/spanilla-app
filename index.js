import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import App from './App'
import { name as appName } from './app.json'
import theme from './theme'

const Main = () => {
	return (
		<PaperProvider theme={theme}>
			<App />
		</PaperProvider>
	)
}

AppRegistry.registerComponent(appName, () => Main)
