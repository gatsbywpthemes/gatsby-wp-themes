import React from 'react'
import { Link } from 'gatsby'

export const PostEntryTitle = ({ post, location, ...props }) => {
  const { title, uri } = post

  return (
    <>
      {location === 'single' ? (
        <h1
          className="entry-title"
          dangerouslySetInnerHTML={{ __html: title }}
          {...props}
        />
      ) : (
        <h2 className="entry-title" {...props}>
          <Link to={`${uri}`} dangerouslySetInnerHTML={{ __html: title }} />
        </h2>
      )}
    </>
  )
}
