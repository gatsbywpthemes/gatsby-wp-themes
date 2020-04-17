/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { widgetTags } from '../../styles/widget'

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

const TagsWidget = () => {
  const data = useStaticQuery(ALL_TAGS_QUERY)
  const { nodes } = data.allWpTag
  return (
    nodes.length && (
      <section sx={{ ...widgetTags }} className="widget widget-tags">
        <h2 className="widget-title">Tags</h2>
        <ul>
          {nodes
            .map(tag => (
              <li key={tag.slug}>
                <Link to={`/${tag.uri}`}>
                  {tag.name} ({tag.count})
                </Link>
              </li>
            ))
            .reduce((accu, elem) => {
              return accu === null ? [elem] : [...accu, ' · ', elem]
            }, null)}
        </ul>
      </section>
    )
  )
}

export default TagsWidget
