/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { tags as tagStyles } from '../../styles/article'

const Tags = ({ tags }) => {
  return (
    <section
      sx={tagStyles}
      className="entry-taxonomy entry-tags"
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <h2>Tags:</h2>
      <ul sx={{}}>
        {tags
          .map(tag => (
            <li key={tag.slug}>
              <Link to={`/${tag.uri}`} rel="tag">
                {tag.name}
              </Link>
            </li>
          ))
          .reduce((accu, elem) => {
            return accu === null ? [elem] : [...accu, ' · ', elem]
          }, null)}
      </ul>
    </section>
  )
}

export default Tags
