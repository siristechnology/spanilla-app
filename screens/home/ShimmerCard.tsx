import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Card } from 'react-native-paper'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'
import tw from 'tailwind-react-native-classnames'

const ShimmerCard = () => {
	return (
		<View style={tw`pt-2 pb-2 pl-4 pr-4`}>
			<Card style={tw`rounded-lg`}>
				<View>
					<ShimmerPlaceholder LinearGradient={LinearGradient} style={tw`rounded-lg h-64 w-full`} />
					<Card.Content>
						<ShimmerPlaceholder LinearGradient={LinearGradient} style={tw`m-2`} />
						<ShimmerPlaceholder LinearGradient={LinearGradient} style={tw`m-2`} />
					</Card.Content>
				</View>
			</Card>
		</View>
	)
}

export default ShimmerCard
