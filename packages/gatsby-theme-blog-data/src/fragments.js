import { graphql } from 'gatsby'

export const fragments = graphql`
  fragment PostTemplateFragment on WpPost {
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
      ...PageTemplate
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
  fragment PageTemplate on WpContentTemplate {
    ... on WpDefaultTemplate {
      templateName
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
