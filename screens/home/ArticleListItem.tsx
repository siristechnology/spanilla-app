import moment from 'moment'
import React from 'react'
import { Avatar, Card, Paragraph } from 'react-native-paper'

const ArticleListItem = ({ navigation, article }) => {
	return (
		<Card onPress={() => navigation.navigate('ArticleDetail')}>
			<Card.Cover source={{ uri: article.lead_image_url }} />
			<Card.Title
				title={article.title}
				subtitle={getRelativeTime(article.date_published || article.date_modified)}
				titleNumberOfLines={4}
				left={() => <Avatar.Image size={40} source={{ uri: article.source.logoLink }} />}
			/>
			<Card.Content>
				<Paragraph>{article.translated_content[0].substring(0, 50) + '...'}</Paragraph>
			</Card.Content>
		</Card>
	)
}

const getRelativeTime = (date) => {
	return moment(Number(date)).startOf('hour').fromNow()
}

export default ArticleListItem
