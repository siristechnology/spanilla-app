import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import ArticleList1Container from '../../layouts/article-list1/articleList1.container'
import AppLayout from '../app-layout'
import { Text, StyleSheet } from 'react-native'
import moment from 'moment'
import Weather from '../../components/weather.component.js'

export const FETCH_ARTICLES_QUERY = gql`
	query fetchArticles {
		fetchArticles {
			_id
			title
			url
			lead_image_url
			excerpt
			original_content
			translated_content
			source {
				name
				logoLink
				category
			}
			author
			date_published
			date_modified
			likes
		}
	}
`

export default function DevScreen(props) {
	const [refreshing, setRefreshing] = useState(false)
	const { loading, error, refetch, data } = useQuery(FETCH_ARTICLES_QUERY, {
		variables: {},
	})

	const handleRefresh = () => {
		setRefreshing(true)
		refetch().then(() => setRefreshing(false))
	}

	if (loading) {
		return <Text>Loading...</Text>
	} else if (error) {
		return <Text>Error!</Text>
	}

	const { navigation } = props

	const articles = data.fetchArticles.filter(
		article => article.source && article.source.category === 'dev',
	)

	return (
		<AppLayout
			headerComponent={
				<>
					<Text style={style.dateStyle}>
						{moment().format('MMMM Do, YYYY')}
					</Text>
					<Weather />
				</>
			}>
			<ArticleList1Container
				articles={articles}
				navigation={navigation}
				refreshing={refreshing}
				handleRefresh={handleRefresh}
			/>
		</AppLayout>
	)
}

const style = StyleSheet.create({
	dateStyle: {
		fontWeight: 'bold',
		fontSize: 22,
		paddingTop: 5,
	},
})
