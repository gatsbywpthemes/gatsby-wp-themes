import { graphql } from 'gatsby'
import Blog from '../components/Posts'

export default Blog

export const pageQuery = graphql`
  fragment GatsbyImageQueryFull on WpMediaItem {
    altText
    localFile {
      childImageSharp {
        gatsbyImageData(width: 1200, quality: 80, layout: CONSTRAINED)
        original {
          height
          width
          src
        }
      }
    }
  }
  fragment GatsbyImageQueryArchive on WpMediaItem {
    altText
    localFile {
      childImageSharp {
        gatsbyImageData(
          maxWidth: 1200
          maxHeight: 400
          quality: 80
          layout: FLUID
        )
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
    # postFormats {
    #   taxonomyInfo {
    #     name
    #   }
    # }
    featuredImage {
      node {
        ...GatsbyImageQueryArchive
      }
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
      templateName
    }
    author {
      node {
        name
        slug
        uri
        avatar {
          url
        }
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
    featuredImage {
      node {
        ...GatsbyImageQueryFull
      }
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
      templateName
    }
    author {
      node {
        name
        slug
        uri
        avatar {
          url
        }
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
    allWpPost(limit: $limit, skip: $skip, sort: { order: DESC, fields: date }) {
      nodes {
        ...PostTemplateFragmentArchive
      }
    }
  }
`
