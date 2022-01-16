import moment from 'moment'
import React from 'react'
import { View } from 'react-native'
import { TouchableRipple, Avatar, Card, Paragraph } from 'react-native-paper'
import tw from 'tailwind-react-native-classnames'

const ArticleListItem = ({ navigation, article }) => {
	return (
		<View style={tw`pt-2 pb-2 pl-4 pr-4`}>
			<Card style={tw`rounded-lg`}>
				<TouchableRipple
					onPress={() => navigation.navigate('ArticleDetail', { article })}
					rippleColor="rgba(0, 0, 0, .32)"
				>
					<View>
						<Card.Cover source={{ uri: article.lead_image_url }} style={tw`rounded-lg`} />
						<Card.Title
							title={article.title}
							subtitle={getRelativeTime(article.date_published || article.date_modified)}
							titleNumberOfLines={4}
							left={() => <Avatar.Image size={40} source={{ uri: article.source.logoLink }} />}
							style={tw`mt-1 mb-1`}
						/>
						<Card.Content>
							<Paragraph style={tw`mb-2`}>
								{article.translated_content[0].substring(0, 100) + '...'}
							</Paragraph>
						</Card.Content>
					</View>
				</TouchableRipple>
			</Card>
		</View>
	)
}

export const getRelativeTime = (date) => {
	return moment(Number(date)).startOf('hour').fromNow()
}

export default ArticleListItem
