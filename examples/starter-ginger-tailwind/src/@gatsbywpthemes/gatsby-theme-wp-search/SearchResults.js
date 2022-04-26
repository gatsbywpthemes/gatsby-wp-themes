import React, { useContext } from "react";
import { Link } from "gatsby";
import { DispatchSearchContext } from "@gatsbywpthemes/gatsby-theme-wp-search/src/context";

export const SearchResults = ({ posts }) => {
  const dispatch = useContext(DispatchSearchContext);
  return (
    !!posts.length && (
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link
                onClick={() => dispatch({ fromSearch: true })}
                to={post.uri}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </li>
          );
        })}
      </ul>
    )
  );
};
