import moment from 'moment'
import React from 'react'
import { TouchableRipple, Avatar, Card, Paragraph } from 'react-native-paper'
import tw from 'tailwind-react-native-classnames'

const ArticleListItem = ({ navigation, article }) => {
	return (
		<TouchableRipple
			onPress={() => navigation.navigate('ArticleDetail', { article })}
			rippleColor="rgba(0, 0, 0, .32)"
		>
			<Card style={tw`mt-2 mb-2 ml-4 mr-4 rounded-lg`}>
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
		</TouchableRipple>
	)
}

export const getRelativeTime = (date) => {
	return moment(Number(date)).startOf('hour').fromNow()
}

export default ArticleListItem
