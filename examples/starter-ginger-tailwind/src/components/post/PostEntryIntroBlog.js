import React from "react";
import Author from "./Author";
import Categories from "./Categories";
import PostEntryExcerpt from "./PostEntryExcerpt";
import PostEntryTitle from "./PostEntryTitle";
import PublicationDate from "./PublicationDate";

export default function PostEntryIntroBlog({ post }) {
  return (
    <div className="bg-white m-4 -mt-16 z-[1] relative w-[95%] lg:w-[75%] mx-auto p-4 shadow-lg text-center">
      <div className="bg-gray-100 p-4 lg:p-8">
        <PublicationDate post={post} location="archive" />
        <PostEntryTitle post={post} location="archive" />
        <PostEntryExcerpt post={post} location="archive" />
        <footer className="entry-meta uppercase text-base">
          <Author post={post} />
          {" / "}
          {!!post.categories.nodes.length && (
            <>
              <Categories post={post} />
            </>
          )}
        </footer>
      </div>
    </div>
  );
}
