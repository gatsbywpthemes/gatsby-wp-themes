/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Fragment } from 'react'
import { Link } from 'gatsby'

const PostEntryTitle = ({ post, location }) => {
  const { title, uri } = post

  return (
    <Fragment>
      {location === 'single' ? (
        <h1
          className="entry-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      ) : (
        <Styled.h1 as="h2" className="entry-title">
          <Link to={`/${uri}`} dangerouslySetInnerHTML={{ __html: title }} />
        </Styled.h1>
      )}
    </Fragment>
  )
}

export default PostEntryTitle
