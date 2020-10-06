/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
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
        // eslint-disable-next-line react/jsx-pascal-case
        <Styled.h1 as="h2" className="entry-title" {...props}>
          <Link to={`${uri}`} dangerouslySetInnerHTML={{ __html: title }} />
        </Styled.h1>
      )}
    </>
  )
}
