import { graphql } from 'gatsby'
import Category from '../gatsby-theme-blog-data/components/Category'

export default Category

export const pageQuery = graphql`
  query GET_CATEGORY1($id: ID!, $ids: [ID], $postsPerPage: Int!) {
    wp {
      category(id: $id) {
        name
        slug
        uri
        posts(first: $postsPerPage, where: { in: $ids }) {
          nodes {
            ...PostTemplateFragment1
          }
        }
      }
    }
  }
`
