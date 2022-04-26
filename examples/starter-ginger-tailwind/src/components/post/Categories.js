import React from "react";
import { Link } from "gatsby";

export default function Categories({ post }) {
  return (
    <>
      <span className="special">in </span>
      <ul className="inline-flex">
        {post.categories.nodes.map((category) => (
          <li key={category.name} className="separateWithMiddots">
            <Link
              className="specialLinkUnderline"
              to={category.uri}
              rel="category"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
