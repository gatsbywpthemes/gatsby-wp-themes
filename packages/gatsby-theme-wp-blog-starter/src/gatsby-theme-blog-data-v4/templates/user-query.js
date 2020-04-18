import { graphql } from 'gatsby'
import User from '../components/User'
export default User

export const pageQuery = graphql`
  query($slug: String!, $limit: Int!, $skip: Int!) {
    allWpPost(
      filter: { author: { slug: { eq: $slug } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        ...PostTemplateFragment_starter
      }
    }
    wpUser(slug: { eq: $slug }) {
      nicename
      nickname
      name
      slug
      id
      uri
      avatar {
        url
      }
    }
  }
`
