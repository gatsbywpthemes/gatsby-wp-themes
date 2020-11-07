import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const ALL_TAGS_QUERY = graphql`
  query GetAllTags {
    allWpTag(limit: 100) {
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
    nodes.length && (
      <section className="widget widget-tags" {...props}>
        <h2 className="widget-title">Tags</h2>
        <ul>
          {nodes.map((tag, index) => (
            <li key={tag.slug}>
              <Link to={`/tag/${tag.slug}`}>
                {tag.name} ({tag.count})
              </Link>
              {index < nodes.length - 1 && ' · '}
            </li>
          ))}
        </ul>
      </section>
    )
  )
}
