import React from 'react'
import { ScrollView, View } from 'react-native'
import { Avatar, Button, Card, Paragraph, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getRelativeTime } from '../home/ArticleListItem'

const ArticleDetail = (props) => {
	const { navigation } = props
	const { article } = props.route.params

	const handleLinkClick = () => {
		const link = article.url
		navigation.navigate('ArticleWeb', { link })
	}

	return (
		<SafeAreaView>
			<ScrollView>
				<Card>
					<Card.Cover source={{ uri: article.lead_image_url }} />
					<Card.Title
						title={article.title}
						subtitle={getRelativeTime(article.date_published || article.date_modified)}
						titleNumberOfLines={4}
						left={() => <Avatar.Image size={40} source={{ uri: article.source.logoLink }} />}
					/>
					<Card.Content>
						<View>{createContentView(article.original_content, article.translated_content)}</View>
					</Card.Content>
					<Card.Actions>
						<Button onPress={handleLinkClick}>{'Read Original Source'}</Button>
					</Card.Actions>
				</Card>
			</ScrollView>
		</SafeAreaView>
	)
}

const createContentView = (original_content, translated_content) => {
	return (
		<View>
			{original_content.map((item, index) => {
				return (
					<View key={index}>
						<Text>{translated_content[index]}</Text>
						<Paragraph>{item}</Paragraph>
					</View>
				)
			})}
		</View>
	)
}

export default ArticleDetail
