import React from "react";
import { Link } from "gatsby";
import { format } from "date-fns";
export default function PublicationDate({ post, location = "archive" }) {
  return location === "archive" ? (
    <>
      {post?.date && (
        <Link
          className="meta-data inline-block mb-4 specialLinkUnderline"
          to={post.uri}
        >
          <time className="entry-date published updated">
            {format(new Date(post?.date), "MMMM dd, yyyy")}
          </time>
        </Link>
      )}
    </>
  ) : (
    <>
      {post?.date && (
        <span className="meta-data inline-block mb-4 special">
          <p className="entry-date published updated">
            {format(new Date(post?.date), "MMMM dd, yyyy")}
          </p>
        </span>
      )}
    </>
  );
}
