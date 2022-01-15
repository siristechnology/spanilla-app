import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />

const ArticleDetail = () => (
	<>
		<Card>
			<Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
			<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
			<Card.Content>
				<Title>Home titles</Title>
				<Paragraph>Card content</Paragraph>
			</Card.Content>
		</Card>
	</>
)

export default ArticleDetail
