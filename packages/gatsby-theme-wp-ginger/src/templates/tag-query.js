import { graphql } from 'gatsby'
import Tag from '../gatsby-theme-blog-data/components/Tag'

export default Tag

export const pageQuery = graphql`
  query GET_TAG1($id: ID!, $ids: [ID], $postsPerPage: Int!) {
    wp {
      tag(id: $id) {
        name
        slug
        id
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
