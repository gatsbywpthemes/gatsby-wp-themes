import { graphql } from "gatsby";

export const fragment = graphql`
  fragment testimonialsBlock on WpPage_Layoutblocks_Blocks_TestimonialsBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    slidesPerView
    testimonials {
      author
      position
      content
      picture {
        ...basicImage
      }
    }
  }
  fragment postTestimonialsBlock on WpPost_Layoutblocks_Blocks_TestimonialsBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    slidesPerView
    testimonials {
      author
      position
      content
      picture {
        ...basicImage
      }
    }
  }
  fragment projectTestimonialsBlock on WpProject_Layoutblocks_Blocks_TestimonialsBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    slidesPerView
    testimonials {
      author
      position
      content
      picture {
        ...basicImage
      }
    }
  }
`;
