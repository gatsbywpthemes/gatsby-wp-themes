import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { WidgetContainer } from './index'

const ALL_TAGS_QUERY = graphql`
  query GetAllTags {
    allWpTag(limit: 100) {
      nodes {
        name
        slug
        count
        uri
      }
    }
  }
`

export const TagsWidget = () => {
  const data = useStaticQuery(ALL_TAGS_QUERY)
  const { nodes } = data.allWpTag
  return (
    nodes.length && (
      <WidgetContainer className="widget-tags">
        <h2 className="widget-title h4">Tags</h2>
        <ul className="d-flex flex-wrap p-0" style={{ listStyle: 'none' }}>
          {nodes.map((tag, index) => (
            <li className="mr-1" key={tag.slug}>
              <Link
                className="btn btn-sm btn-secondary mb-1 py-0 text-uppercase"
                to={tag.uri}
              >
                {tag.name} ({tag.count})
              </Link>
            </li>
          ))}
        </ul>
      </WidgetContainer>
    )
  )
}
