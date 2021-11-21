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
