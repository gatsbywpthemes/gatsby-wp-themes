import React from "react";
import { Link } from "gatsby";

export default function Author({ post }) {
  return (
    post.author?.node && (
      <>
        <span className="special">by </span>
        <Link className="specialLinkUnderline" to={post.author.node.uri}>
          {post.author.node.name}
        </Link>
      </>
    )
  );
}
