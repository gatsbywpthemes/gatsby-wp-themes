import { graphql } from 'gatsby'
import Tag from '../components/Tag'

export default Tag

export const pageQuery = graphql`
  query GET_POSTS_BY_TAG($slug: String!, $limit: Int!, $skip: Int!) {
    allWpPost(
      filter: { tags: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        uri
        title
        excerpt
        date
        featuredImage {
          ...GatsbyImageQuery
        }
      }
    }
    wpTag(slug: { eq: $slug }) {
      uri
      name
      description
    }
  }
`
