import { graphql } from 'gatsby'
import Blog from '../components/Posts'

export default Blog

export const pageQuery = graphql`
  fragment GatsbyImageQueryFull on WpMediaItem {
    altText
    sourceUrl
    remoteFile {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  fragment GatsbyImageQueryArchive on WpMediaItem {
    altText
    sourceUrl
    remoteFile {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 400, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  query($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip) {
      nodes {
        id
        uri
        title
        excerpt
        date
        featuredImage {
          ...GatsbyImageQueryArchive
        }
      }
    }
  }
`
