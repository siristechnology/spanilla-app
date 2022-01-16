import React, { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { useQuery } from '@apollo/client'
import { FETCH_ARTICLES_QUERY } from './Fetch_Article_Query'
import ArticleListItem from './ArticleListItem'
import ShimmerCard from './ShimmerCard'

const Home = ({ navigation }) => {
	const { loading, error, refetch, data } = useQuery(FETCH_ARTICLES_QUERY)
	const [refreshing, setRefreshing] = useState(false)

	const articles = data?.fetchArticles?.filter((article) => article.source && article.source.category === 'news')

	const handleRefresh = useCallback(() => {
		setRefreshing(true)
		refetch().then(() => setRefreshing(false))
	}, [])

	const renderItem = useCallback((info) => {
		return <ArticleListItem navigation={navigation} article={info.item} />
	}, [])

	return (
		<>
			{loading && <ShimmerCard />}
			{!loading && !error && articles && (
				<FlatList
					data={articles}
					renderItem={renderItem}
					keyExtractor={(item) => item._id}
					refreshing={refreshing}
					onRefresh={handleRefresh}
				/>
			)}
		</>
	)
}

export default Home
