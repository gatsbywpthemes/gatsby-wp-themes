import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import WidgetContainer from "./WidgetContainer";

const ALL_CATEGORIES_QUERY = graphql`
  query GetCategories {
    allWpCategory(filter: { count: { gt: 0 } }, limit: 100) {
      nodes {
        name
        slug
        uri
      }
    }
  }
`;
export default function CategoriesWidget() {
  const {
    allWpCategory: { nodes },
  } = useStaticQuery(ALL_CATEGORIES_QUERY);
  return (
    !!nodes.length && (
      <WidgetContainer title="Categories" className="widget widget-categories">
        <ul className="listRaw">
          {nodes.map((category) => (
            <li key={category.slug}>
              <Link className="special" to={category.uri}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </WidgetContainer>
    )
  );
}
