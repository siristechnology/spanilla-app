import React from 'react'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import { ActivityIndicator } from 'react-native-paper'

const ArticleWeb = (props) => {
	const { link } = props.route.params

	return (
		<WebView
			renderLoading={() => <ActivityIndicator />}
			startInLoadingState
			source={{ uri: link }}
			style={{
				flex: 1,
			}}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
})

export default ArticleWeb
