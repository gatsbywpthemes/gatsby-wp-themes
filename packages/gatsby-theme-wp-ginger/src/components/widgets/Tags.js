/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'

const ALL_TAGS_QUERY = graphql`
  query GetAllTags {
    wp {
      tags(first: 100) {
        nodes {
          name
          slug
          count
        }
      }
    }
  }
`

const TagsWidget = () => {
  const data = useStaticQuery(ALL_TAGS_QUERY)
  const { tags } = data.wp
  return (
    tags.nodes.length && (
      <section sx={{ variant: 'widget.tags' }} className="widget widget-tags">
        <h2 className="widget-title">Tags</h2>
        <ul>
          {tags.nodes
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
