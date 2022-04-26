import React from "react";
import { Link } from "gatsby";
export default function Tags({ tags }) {
  return (
    <section className="entry-taxonomy entry-tags">
      <h2>Tags:</h2>
      <ul className="listRaw">
        {tags.map((tag) => (
          <li key={tag.slug} className="separateWithMiddots">
            <Link to={tag.uri} className="specialLinkUnderline">
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
