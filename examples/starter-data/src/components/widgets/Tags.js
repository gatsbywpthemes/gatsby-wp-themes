/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import widgetStyles from '../../styles/widgetStyles'

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

const TagsWidget = () => {
  const data = useStaticQuery(ALL_TAGS_QUERY)
  const { nodes } = data.allWpTag
  return (
    nodes.length && (
      <section sx={{ ...widgetStyles.tags }} className="widget widget-tags">
        <h2 className="widget-title">Tags</h2>
        <ul>
          {nodes
            .map(tag => (
              <li key={tag.slug}>
                <Link to={`/tag/${tag.slug}`}>
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
