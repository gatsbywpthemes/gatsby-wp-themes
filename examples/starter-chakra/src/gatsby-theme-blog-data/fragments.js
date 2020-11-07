import { graphql } from 'gatsby'

export const fragments = graphql`
  fragment ImageFluidFragment on WpMediaItem {
    altText
    sourceUrl
    localFile {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 600, quality: 80) {
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
    # postFormats {
    #   taxonomyInfo {
    #     name
    #   }
    # }
    template {
      templateName
    }
    featuredImage {
      node {
        ...ImageFluidFragment
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
`
