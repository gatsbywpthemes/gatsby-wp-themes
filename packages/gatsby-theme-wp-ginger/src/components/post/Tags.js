/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'

const Tags = ({ post, location }) => {
  const tags = post.tags.nodes

  return (
    <>
      {tags.length > 0 && (
        <section
          className="entry-taxonomy entry-tags"
          sx={{ mb: 7 }}
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <h2 sx={{ variant: 'special.title', fontSize: 'xl', mb: 1 }}>
            Tags:
          </h2>
          <ul sx={{ listStyle: 'none', display: 'flex', p: 0, ml: -1, mb: 1 }}>
            {tags
              .map(tag => (
                <li sx={{ px: 1, m: 0 }} key={tag.slug}>
                  <Link
                    sx={{ variant: 'special.link', fontSize: 'xxs' }}
                    to={`/tag/${tag.slug}`}
                    rel="tag"
                  >
                    {tag.name}
                  </Link>
                </li>
              ))
              .reduce((accu, elem) => {
                return accu === null ? [elem] : [...accu, ' · ', elem]
              }, null)}
          </ul>
        </section>
      )}
    </>
  )
}

export default Tags
