import React from "react";
import Author from "./Author";
import Categories from "./Categories";
import PostEntryExcerpt from "./PostEntryExcerpt";
import PostEntryTitle from "./PostEntryTitle";
import PublicationDate from "./PublicationDate";

export default function PostEntryIntroBlog({ post }) {
  return (
    <div>
      <PublicationDate post={post} location="archive" />
      <PostEntryTitle post={post} location="archive" />
      <PostEntryExcerpt post={post} location="archive" />
      <footer className="entry-meta">
        <Author post={post} />{" "}
        {!!post.categories.nodes.length && (
          <>
            <Categories post={post} />
          </>
        )}
      </footer>
    </div>
  );
}
