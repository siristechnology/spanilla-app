import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/home/Home'
import ArticleDetailScreen from './screens/articleDetail/ArticleDetail'

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
