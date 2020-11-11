import { graphql } from 'gatsby'
import Blog from '../components/Posts'

export default Blog

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip, sort: { order: DESC, fields: date }) {
      nodes {
        ...PostTemplateFragment
      }
    }
  }
`
