import { graphql } from 'gatsby'

export const fragments = graphql`
  fragment PostTemplateFragment_starter on WpPost {
    id
    uri
    slug
    title
    excerpt
    date

    featuredImage {
      node {
        ...GatsbyImageQuery_starter
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

  fragment GatsbyImageQuery_starter on WpMediaItem {
    altText
    sourceUrl
    localFile {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 600, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
