import { graphql } from 'gatsby'
import Blog from '../components/Posts'

export default Blog

export const pageQuery = graphql`
  fragment GatsbyImageQuery on WpMediaItem {
    altText
    sourceUrl
    remoteFile {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
  query GET_POSTS($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip) {
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
  }
`
