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
    headlesswp {
      pageTemplate
      skipTitle
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
        gatsbyImageData(
          width: 1200
          height: 600
          quality: 80
          layout: CONSTRAINED
        )
        original {
          height
          width
          src
        }
      }
    }
  }
`
