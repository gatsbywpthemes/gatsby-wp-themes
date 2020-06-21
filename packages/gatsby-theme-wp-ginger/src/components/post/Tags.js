/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { tagStyles } from '../../styles/'

export const Tags = ({ tags }) => {
  return (
    <section sx={tagStyles} className="entry-taxonomy entry-tags">
      <h2>Tags:</h2>
      <ul sx={{}}>
        {tags.map((tag, index) => (
          <li key={tag.slug}>
            <Link to={tag.uri}>{tag.name}</Link>
            {index < tags.length - 1 && ' · '}
          </li>
        ))}
      </ul>
    </section>
  )
}
