import { graphql } from 'gatsby'
import Tag from '../components/Tag'

export default Tag

export const pageQuery = graphql`
  query GET_TAG_STARTER($id: ID!, $ids: [ID], $postsPerPage: Int!) {
    wp {
      tag(id: $id) {
        name
        slug
        id
        uri
        posts(first: $postsPerPage, where: { in: $ids }) {
          nodes {
            ...PostTemplateFragment_starter
          }
        }
      }
    }
  }
`
