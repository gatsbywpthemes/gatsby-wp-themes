import { graphql } from "gatsby";

export const fragment = graphql`
  fragment lastsPostsBlock on WpPage_Layoutblocks_Blocks_LastsPostsBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    allPosts {
      target
      title
      url
    }
  }
  fragment postLastsPostsBlock on WpPost_Layoutblocks_Blocks_LastsPostsBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    allPosts {
      target
      title
      url
    }
  }
  fragment projectLastsPostsBlock on WpProject_Layoutblocks_Blocks_LastsPostsBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    allPosts {
      target
      title
      url
    }
  }
`;
