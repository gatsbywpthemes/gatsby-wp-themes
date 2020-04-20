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
  fragment PostTemplateFragmentArchive on WpPost {
    id
    uri
    slug
    title
    excerpt
    date
    postFormats {
      taxonomyInfo {
        name
      }
    }
    featuredImage {
      ...GatsbyImageQueryArchive
    }
    categories {
      nodes {
        id
        slug
        name
        uri
      }
    }
    template {
      ...PageTemplate
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

  fragment PostTemplateFragmentFull on WpPost {
    id
    uri
    slug
    title
    excerpt
    date
    postFormats {
      taxonomyInfo {
        name
      }
    }
    featuredImage {
      ...GatsbyImageQueryFull
    }
    categories {
      nodes {
        id
        slug
        name
        uri
      }
    }
    template {
      ...PageTemplate
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

  query($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip) {
      nodes {
        ...PostTemplateFragmentArchive
      }
    }
  }
`
