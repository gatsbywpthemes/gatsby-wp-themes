import React from "react";
import { HeadlineContent } from "./HeadlineContent";
import { Image } from "./ui-components";
import { Link, useStaticQuery, graphql } from "gatsby";
import { useDefaultImages } from "./hooks/useDefaultImages";

export const LastsPostsBlock = ({
  cssClass,
  anchorId,
  content,
  headline,
  headlineTag,
  allPosts,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(limit: 6) {
        nodes {
          id
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

  const posts = data.allWpPost?.nodes;
  const { postDefaultImage } = useDefaultImages();

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
          const image = featuredImage ? featuredImage.node : postDefaultImage;

          return (
            <div className="post" key={id}>
              <Link to={uri}>
                <Image
                  img={image}
                  className="post-image-container"
                  imgClassName="post-image"
                />

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
