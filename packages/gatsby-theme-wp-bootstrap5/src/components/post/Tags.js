import React from 'react'
import { Link } from 'gatsby'

export const Tags = ({ tags }) => {
  return (
    <section
      className="entry-taxonomy entry-tags"
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <h2 className="h5">Tags:</h2>
      <ul className="d-flex flex-wrap p-0">
        {tags.map((tag, index) => (
          <li className="me-1" key={tag.slug}>
            <Link
              className="btn btn-sm btn-secondary mb-1 py-0 text-uppercase"
              to={tag.uri}
            >
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
