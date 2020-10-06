/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export const Tags = ({ tags }) => {
  return (
    <section
      className="entry-taxonomy entry-tags"
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
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
