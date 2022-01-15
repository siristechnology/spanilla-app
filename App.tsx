import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Home'
import ArticleDetailScreen from './ArticleDetail'

const Stack = createNativeStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Spanilla' }} />
				<Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
