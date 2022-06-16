import React from "react";
import { HeadlineContent } from "./HeadlineContent";
import { Image } from "./ui-components";
import { Link, useStaticQuery, graphql } from "gatsby";

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
`;

export const LastsPostsBlock = ({
  cssClass,
  anchorId,
  content,
  headline,
  headlineTag,
  allPosts,
  ...props
}) => {
  const lastsPosts = useStaticQuery(graphql`
    query MyQuery {
      allWpPost(limit: 6) {
        nodes {
          uri
          title
          excerpt
          featuredImage {
            node {
              ...basicImage
            }
          }
        }
      }
    }
  `);

  const posts = lastsPosts.allWpPost.nodes;
  return (
    <section
      className={`lasts-posts-block ${cssClass ? cssClass : ""}`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
      {(headline || content) && (
        <HeadlineContent
          headline={headline}
          content={content}
          headlineTag={headlineTag}
        />
      )}
      <div className="posts">
        {posts?.map((post) => {
          const { id, title, uri, excerpt, featuredImage } = post;
          return (
            <div className="post" key={id}>
              <Link to={uri}>
                {featuredImage && (
                  <Image
                    img={featuredImage.node}
                    className="post-image-container"
                    imgClassName="post-image"
                  />
                )}
                <div className="post-content">
                  <h3 className="headline">{title}</h3>
                  <div
                    className="excerpt"
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {allPosts && (
        <div className="button-container">
          <Link className="button" to={allPosts.url}>
            {allPosts.title}
          </Link>
        </div>
      )}
    </section>
  );
};
