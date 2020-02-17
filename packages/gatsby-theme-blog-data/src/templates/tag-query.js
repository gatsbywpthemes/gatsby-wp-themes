import { graphql } from 'gatsby'
import Tag from '../components/Tag'

export default Tag

export const pageQuery = graphql`
  query GET_TAG($id: ID!, $ids: [ID]) {
    wp {
      tag(id: $id) {
        name
        slug
        id
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
