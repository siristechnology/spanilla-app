import { gql } from '@apollo/client'

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
