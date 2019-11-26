import { graphql } from 'gatsby'
import Blog from '../components/Posts'

export default Blog

export const query = graphql`
  fragment ImageFluidFragment on WP_MediaItem {
    altText
    sourceUrl
    imageFile {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
  fragment PostTemplateFragment on WP_Post {
    id
    uri
    slug
    title
    excerpt
    date
    postId
    featuredImage {
      ...ImageFluidFragment
    }
    categories {
      nodes {
        id
        slug
        name
      }
    }
    author {
      name
      slug
      avatar {
        url
      }
    }
    tags {
      nodes {
        name
        slug
      }
    }
  }
`

export const pageQuery = graphql`
  query GET_POSTS($ids: [ID], $postsPerPage: Int!) {
    wp {
      posts(first: $postsPerPage, where: { in: $ids }) {
        nodes {
          ...PostTemplateFragment
        }
      }
    }
  }
`
