import { graphql } from 'gatsby'

export const fragments = graphql`
  fragment PostTemplateFragment on WpPost {
    id
    uri
    slug
    title
    excerpt
    date
    template {
      templateName
    }
    headlesswp {
      skipTitle
    }

    # featuredImage {
    #   node {
    #     ...GatsbyImageQuery
    #   }
    # }
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

  # fragment GatsbyImageQuery on WpMediaItem {
  #   altText
  #   sourceUrl
  #   localFile {
  #     childImageSharp {
  #       gatsbyImageData(width: 1200, quality: 80, layout: CONSTRAINED)
  #     }
  #   }
  # }
`
