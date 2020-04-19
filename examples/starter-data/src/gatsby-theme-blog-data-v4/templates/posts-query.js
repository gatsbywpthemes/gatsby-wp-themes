import { graphql } from 'gatsby'
import Blog from '../components/Posts'

export default Blog

export const query = graphql`
  fragment ImageFluidFragment on WpMediaItem {
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
  fragment PostTemplateFragment_starter on WpPost {
    id
    uri
    slug
    title
    excerpt
    date
    databaseId
    postFormats {
      taxonomyInfo {
        name
      }
    }
    template {
      ...PageTemplates_starter
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
  fragment PageTemplates_starter on WpContentTemplateUnion {
    ... on WpDefaultTemplate {
      templateName
    }
    ... on WpFullWidthTemplate {
      templateName
    }
    ... on WpLeftSidebarTemplate {
      templateName
    }
    ... on WpRightSidebarTemplate {
      templateName
    }
  }
`

export const pageQuery = graphql`
  query GET_POSTS_STARTER($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip) {
      nodes {
        ...PostTemplateFragment_starter
      }
    }
  }
`
