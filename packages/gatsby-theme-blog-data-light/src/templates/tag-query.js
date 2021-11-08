import { graphql } from 'gatsby'
import Tag from '../components/Tag'

export default Tag

export const pageQuery = graphql`
  query($slug: String!, $limit: Int!, $skip: Int!) {
    allWpPost(
      filter: { tags: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        ...PostTemplateFragment
      }
    }
    wpTag(slug: { eq: $slug }) {
      uri
      name
      description
    }
  }
`
