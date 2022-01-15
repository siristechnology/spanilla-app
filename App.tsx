import React from 'react'
import { Alert } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import Header from './Header'

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />

const App = () => (
	<>
		<Header />
		<Card>
			<Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
			<Card.Content>
				<Title>Card title</Title>
				<Paragraph>Card content</Paragraph>
			</Card.Content>
			<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
			<Card.Actions>
				<Button onPress={() => Alert.alert('Card Title')}> Cancel</Button>
				<Button>Ok</Button>
			</Card.Actions>
		</Card>
	</>
)

export default App
