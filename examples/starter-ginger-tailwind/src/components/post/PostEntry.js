import React from "react";
import PostEntryIntroBlog from "./PostEntryIntroBlog";
import PostEntryMedia from "./PostEntryMedia";

export default function PostEntry({ isFirst = false, post }) {
  return (
    <>
      <article
        className="entry"
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
        transform="translateY(2rem)"
      >
        <PostEntryMedia post={post} imageLoading={isFirst ? "eager" : "lazy"} />
        <PostEntryIntroBlog post={post} />
      </article>
    </>
  );
}
