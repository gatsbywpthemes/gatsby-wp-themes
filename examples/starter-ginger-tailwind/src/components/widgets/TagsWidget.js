import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import WidgetContainer from "./WidgetContainer";

const ALL_TAGS_QUERY = graphql`
  query GetAllTags {
    allWpTag(filter: { count: { gt: 0 } }, limit: 100) {
      nodes {
        name
        slug
        count
        uri
      }
    }
  }
`;
export default function TagsWidget() {
  const {
    allWpTag: { nodes },
  } = useStaticQuery(ALL_TAGS_QUERY);
  return (
    !!nodes.length && (
      <WidgetContainer className="widget widget-tags" title="Tags">
        <ul className="listRaw">
          {nodes.map((tag) => (
            <li key={tag.slug} className="separateWithMiddots">
              <Link className="special" to={tag.uri}>
                {tag.name} ({tag.count})
              </Link>
            </li>
          ))}
        </ul>
      </WidgetContainer>
    )
  );
}
