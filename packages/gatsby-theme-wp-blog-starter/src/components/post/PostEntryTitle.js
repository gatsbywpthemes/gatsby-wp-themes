/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { Link } from 'gatsby'

const PostEntryTitle = ({ post, location, postsPrefix }) => {
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
          <Link
            to={`${postsPrefix}/${uri}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Styled.h1>
      )}
    </Fragment>
  )
}

export default PostEntryTitle
