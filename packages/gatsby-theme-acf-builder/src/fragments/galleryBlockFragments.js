import { graphql } from "gatsby";
export const fragment = graphql`
  fragment galleryBlock on WpPage_Layoutblocks_Blocks_GalleryBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    gallery {
      ...basicImage
    }
  }
  fragment postGalleryBlock on WpPost_Layoutblocks_Blocks_GalleryBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    gallery {
      ...basicImage
    }
  }
  fragment projectGalleryBlock on WpProject_Layoutblocks_Blocks_GalleryBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    gallery {
      ...basicImage
    }
  }
`;
