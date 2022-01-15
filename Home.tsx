import React from 'react'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper'

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />

const Home = ({ navigation }) => {
	return (
		<>
			<Card onPress={() => navigation.navigate('ArticleDetail')}>
				<Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
				<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
				<Card.Content>
					<Title>Home titles</Title>
					<Paragraph>Card content</Paragraph>
				</Card.Content>
			</Card>
		</>
	)
}

export default Home
