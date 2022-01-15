import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { ApolloProvider } from '@apollo/client'
import App from './App'
import { name as appName } from './app.json'
import theme from './theme'
import graphqlClient from './graphql-client'

const Main = () => {
	return (
		<ApolloProvider client={graphqlClient}>
			<PaperProvider theme={theme}>
				<App />
			</PaperProvider>
		</ApolloProvider>
	)
}

AppRegistry.registerComponent(appName, () => Main)
