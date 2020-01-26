import { graphql } from 'gatsby'
import Blog from '../components/Posts'

export default Blog

export const query = graphql`
  fragment ImageFluidFragment_starter on WP_MediaItem {
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
  fragment PostTemplateFragment_starter on WP_Post {
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
      ...PageTemplates_starter
    }
    featuredImage {
      ...ImageFluidFragment_starter
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
  fragment PageTemplates_starter on WP_ContentTemplateUnion {
    ... on WP_DefaultTemplate {
      templateName
    }
    ... on WP_FullWidthTemplate {
      templateName
    }
    ... on WP_LeftSidebarTemplate {
      templateName
    }
    ... on WP_RightSidebarTemplate {
      templateName
    }
  }
`

export const pageQuery = graphql`
  query GET_POSTS_STARTER($ids: [ID], $postsPerPage: Int!) {
    wp {
      posts(first: $postsPerPage, where: { in: $ids }) {
        nodes {
          ...PostTemplateFragment_starter
        }
      }
    }
  }
`
