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
          sx={{ mb: '3rem' }}
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <h2>Tags:</h2>
          <ul
            sx={{
              listStyle: 'none',
              display: 'flex',
              p: 0,
              ml: '-0.25rem',
              mb: '0.25rem',
            }}
          >
            {tags
              .map(tag => (
                <li sx={{ px: 1, m: 0 }} key={tag.slug}>
                  <Link
                    sx={{
                      variant: 'special.underlineOnHover',
                      fontSize: 'xxs',
                    }}
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
