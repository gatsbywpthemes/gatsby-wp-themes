import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const ALL_TAGS_QUERY = graphql`
  query GetAllTags {
    allWpTag(filter: { count: { gt: 0 } }, limit: 100) {
      nodes {
        name
        slug
        count
      }
    }
  }
`

export const TagsWidget = (props) => {
  const data = useStaticQuery(ALL_TAGS_QUERY)
  const { nodes } = data.allWpTag

  return (
    !!nodes.length && (
      <section className="widget widget-tags" {...props}>
        <h3 className="widget-title">Tags</h3>
        <div className="flex flex-wrap justify-center">
          {nodes.map((tag, index) => (
            <div className="pb-3" key={tag.slug}>
              <Link to={`/tag/${tag.slug}`} className="inline-block pl-2 pr-1 ">
                {tag.name} ({tag.count})
              </Link>
              {index < nodes.length - 1 && " · "}
            </div>
          ))}
        </div>
      </section>
    )
  )
}
