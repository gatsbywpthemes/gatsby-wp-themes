import { graphql } from "gatsby"

export const fragments = graphql`
  fragment PostTemplateFragment_starter on WpPost {
    id
    uri
    slug
    title
    excerpt
    date
    layoutBlocks {
      blocks {
        __typename
        ...postContentBlock
        ...postSectionsBlock
        ...postCoverBlock
        ...postFeaturesBlock
        ...postAccordionBlock
        ...postTestimonialsBlock
        ...postPricingBlock
        ...postProjectsBlock
        ...postGalleryBlock
        ...postSpacerBlock
        ...postLogosBlock
        ...postLastsPostsBlock
        ...postTeamBlock
      }
    }
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
    gatsbyImage(quality: 80, layout: FULL_WIDTH, width: 1000, aspectRatio: 1.5)
    localFile {
      publicURL
      childImageSharp {
        # gatsbyImageData(quality: 80, layout: FULL_WIDTH)
        original {
          height
          width
          src
        }
      }
    }
  }
`
