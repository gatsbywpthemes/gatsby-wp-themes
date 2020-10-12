import { graphql } from 'gatsby'

export const fragments = graphql`
  fragment PostTemplateFragment on WpPost {
    id
    uri
    slug
    title
    excerpt
    date

    featuredImage {
      node {
        ...GatsbyImageQuery
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

  fragment GatsbyImageQuery on WpMediaItem {
    altText
    sourceUrl
    localFile {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
