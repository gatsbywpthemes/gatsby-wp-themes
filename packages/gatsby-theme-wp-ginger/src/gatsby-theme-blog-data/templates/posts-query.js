import { graphql } from 'gatsby'
import Blog from '../components/Posts'

export default Blog

export const query = graphql`
  fragment ImageFluidFragment1 on WP_MediaItem {
    altText
    sourceUrl
    imageFile {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 400, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  fragment ImageFluidFragment2 on WP_MediaItem {
    altText
    sourceUrl
    imageFile {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }

  fragment PostTemplateFragment1 on WP_Post {
    id
    uri
    title
    excerpt
    date
    featuredImage {
      ...ImageFluidFragment1
    }
    categories {
      nodes {
        id
        slug
        name
        uri
      }
    }
    author {
      name
      slug
      uri
    }
  }

  fragment PostTemplateFragment2 on WP_Post {
    id
    uri
    title
    excerpt
    date
    postId
    featuredImage {
      ...ImageFluidFragment2
    }
    categories {
      nodes {
        id
        slug
        name
        uri
      }
    }
    author {
      name
      slug
      description
      uri
      avatar {
        url
      }
    }
    tags {
      nodes {
        name
        slug
        uri
      }
    }
  }
`

export const pageQuery = graphql`
  query GET_POSTS1($ids: [ID]) {
    wp {
      posts(where: { in: $ids }) {
        nodes {
          ...PostTemplateFragment1
        }
      }
    }
  }
`
