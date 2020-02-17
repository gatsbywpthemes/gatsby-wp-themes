import { graphql } from 'gatsby'
import Category from '../components/Category'

export default Category

export const pageQuery = graphql`
  query GET_CATEGORY($id: ID!, $ids: [ID]) {
    wp {
      category(id: $id) {
        name
        slug
        uri
        posts(where: { in: $ids }) {
          nodes {
            ...PostTemplateFragment
          }
        }
      }
    }
  }
`
