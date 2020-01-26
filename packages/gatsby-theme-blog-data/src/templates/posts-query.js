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
    postFormats {
      nodes {
        name
      }
    }
    template {
      ...PageTemplates
    }
    featuredImage {
      ...ImageFluidFragment
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
  fragment PageTemplates on WP_ContentTemplateUnion {
    ... on WP_DefaultTemplate {
      templateName
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
