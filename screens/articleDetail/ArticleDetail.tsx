import React, { useCallback, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { Avatar, Button, Card, Paragraph } from 'react-native-paper'
import { useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { getRelativeTime } from '../home/ArticleListItem'

const ArticleDetail = (props) => {
	const { navigation } = props
	const { article } = props.route.params
	const { colors } = useTheme()

	useEffect(() => {
		navigation.setOptions({
			title: article.source.name,
		})
	}, [article.source.name, navigation])

	const handleLinkClick = useCallback(() => {
		navigation.navigate('ArticleWeb', { article })
	}, [article, navigation])

	return (
		<SafeAreaView>
			<ScrollView>
				<Card>
					<Card.Cover source={{ uri: article.lead_image_url }} />
					<View style={tw`ml-4 -mt-4`}>
						<Avatar.Image
							size={40}
							source={{ uri: article.source.logoLink }}
							style={tw`border-2 border-white items-center content-center overflow-hidden`}
						/>
					</View>
					<Card.Title
						title={article.title}
						subtitle={getRelativeTime(article.date_published || article.date_modified)}
						titleNumberOfLines={6}
						style={tw`mt-1 mb-1`}
					/>
					<Card.Content>
						<View>{createContentView(article.original_content, article.translated_content, colors)}</View>
					</Card.Content>
					<Card.Actions>
						<Button onPress={handleLinkClick} color={colors.notification}>
							{'Read Original Source'}
						</Button>
					</Card.Actions>
				</Card>
			</ScrollView>
		</SafeAreaView>
	)
}

const createContentView = (original_content, translated_content, colors) => {
	return (
		<View>
			{original_content.map((item, index) => {
				return (
					<View key={index}>
						<Paragraph style={{ color: colors.primary }}>{translated_content[index]}</Paragraph>
						<Paragraph style={tw`mb-3`}>{item}</Paragraph>
					</View>
				)
			})}
		</View>
	)
}

export default ArticleDetail
