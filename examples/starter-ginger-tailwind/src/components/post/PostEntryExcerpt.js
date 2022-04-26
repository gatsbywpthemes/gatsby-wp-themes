import React from "react";

export default function PostEntryExcerpt({ post, location }) {
  return (
    location === "archive" &&
    post.excerpt && (
      <div
        className="entry-excerpt"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
    )
  );
}
