import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { format } from "date-fns";
import { GatsbyImage } from "gatsby-plugin-image";
import WidgetContainer from "./WidgetContainer";
export default function RecentPosts() {
  const data = useStaticQuery(RECENT_POSTS_QUERY);
  const { nodes } = data.allWpPost;
  return (
    !!nodes.length && (
      <WidgetContainer
        className="widget widget-recent-posts"
        title="Recent Posts"
      >
        <ul className="listRaw">
          {nodes.map((post) => {
            return (
              <li key={post.id}>
                <Link aria-label={`Read more - ${post.title}`} to={post.uri}>
                  {post.featuredImage && (
                    <GatsbyImage
                      image={
                        post.featuredImage.node.localFile.childImageSharp
                          ?.gatsbyImageData
                      }
                      alt={post.featuredImage.node.altText}
                    />
                  )}
                </Link>
                <div>
                  <Link className="widget-post-date" to={post.uri}>
                    <time className="entry-date" dateTime={post.date}>
                      {format(new Date(post.date), "MMMM dd, yyyy")}
                    </time>
                  </Link>
                  <Link
                    className="widget-post-title"
                    to={post.uri}
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </WidgetContainer>
    )
  );
}
const RECENT_POSTS_QUERY = graphql`
  query GetRecentPosts {
    allWpPost(limit: 5, sort: { order: DESC, fields: date }) {
      nodes {
        id
        title
        uri
        date

        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 72
                  height: 48
                  quality: 80
                  layout: FIXED
                )
              }
            }
          }
        }
      }
    }
  }
`;
