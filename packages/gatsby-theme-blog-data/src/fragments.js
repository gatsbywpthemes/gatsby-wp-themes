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
      ...GatsbyImageQuery
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
  fragment PageTemplate on WpContentTemplateUnion {
    ... on WpDefaultTemplate {
      templateName
    }
  }
  fragment GatsbyImageQuery on WpMediaItem {
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
`
