import React from "react";
import { Link } from "gatsby";
export default function PostEntryTitle({ post, location }) {
  return location === "archive" ? (
    <h2 className="entry-title">
      <Link to={post.uri} dangerouslySetInnerHTML={{ __html: post.title }} />
    </h2>
  ) : (
    <h1
      className="entry-title"
      dangerouslySetInnerHTML={{ __html: post.title }}
    />
  );
}
