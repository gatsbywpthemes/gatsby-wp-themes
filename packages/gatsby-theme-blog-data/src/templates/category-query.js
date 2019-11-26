import { graphql } from 'gatsby'
import Category from '../components/Category'

export default Category

export const pageQuery = graphql`
  query GET_CATEGORY($id: ID!, $ids: [ID], $postsPerPage: Int!) {
    wp {
      category(id: $id) {
        name
        slug
        posts(first: $postsPerPage, where: { in: $ids }) {
          nodes {
            ...PostTemplateFragment
          }
        }
      }
    }
  }
`
