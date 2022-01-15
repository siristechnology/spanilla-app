import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/home/Home'
import ArticleDetailScreen from './screens/articleDetail/ArticleDetail'
import ArticleWeb from './screens/articleDetail/ArticleWeb'

const Stack = createNativeStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Spanilla' }} />
				<Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} options={{ title: '' }} />
				<Stack.Screen name="ArticleWeb" component={ArticleWeb} options={{ title: '' }} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
