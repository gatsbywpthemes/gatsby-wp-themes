import React from "react";
import SocialShare from "../SocialShare";
import Author from "./Author";
import Categories from "./Categories";
import PostEntryExcerpt from "./PostEntryExcerpt";
import PostEntryTitle from "./PostEntryTitle";
import PrevNextPostNavigation from "./PrevNextPostNavigation";
import PublicationDate from "./PublicationDate";

export default function PostEntryIntro({ ctx, post }) {
  return (
    <div>
      <SocialShare
        url={post.uri}
        title={post.title}
        media={
          post.featuredImage
            ? post.featuredImage.node.localFile.childImageSharp?.original?.src
            : null
        }
      />
      <PublicationDate post={post} location="single" />
      <PostEntryTitle post={post} location="single" />
      <PostEntryExcerpt post={post} location="single" />
      <footer className="entry-meta">
        <Author post={post} location="single" />{" "}
        {!!post.categories.nodes.length && (
          <>
            / <Categories {...{ post }} />
          </>
        )}
      </footer>
      <PrevNextPostNavigation ctx={ctx} />
    </div>
  );
}
