import React from "react";
import { Link } from "gatsby";
export default function PostEntryTitle({ post, location }) {
  return location === "archive" ? (
    <h2 className="entry-title lg:text-4xl">
      <Link to={post.uri} dangerouslySetInnerHTML={{ __html: post.title }} />
    </h2>
  ) : (
    <h1
      className="entry-title mb-4 lg:mb-6"
      dangerouslySetInnerHTML={{ __html: post.title }}
    />
  );
}
