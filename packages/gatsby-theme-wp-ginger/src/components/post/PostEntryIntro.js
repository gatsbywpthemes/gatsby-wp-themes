/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import PublicationDate from './PublicationDate'
import PostEntryTitle from './PostEntryTitle'
import PostEntryExcerpt from './PostEntryExcerpt'
import Categories from './Categories'
import Author from './Author'
import PrevNextPostNavigation from './PrevNextPostNavigation'
import SocialShare from '../social/SocialShare'
import normalize from 'normalize-path'

const PostEntryIntro = ({
  ctx,
  post,
  postsPrefix = '',
  location = 'archive',
  variant = { variant: 'card.blog' },
}) => {
  return (
    <div
      sx={variant}
      data-sal={location === 'single' ? 'fade' : 'none'}
      data-sal-duration={location === 'single' ? '1000' : '0'}
      data-sal-easing="ease"
    >
      {location === 'single' && (
        <SocialShare
          url={normalize(`/${postsPrefix}/${post.uri}`)}
          title={post.title}
          media={
            post.featuredImage
              ? post.featuredImage.imageFile.childImageSharp.fluid.src
              : null
          }
        />
      )}
      <PublicationDate {...{ post, postsPrefix, location }} />
      <PostEntryTitle {...{ post, postsPrefix, location }} />
      <PostEntryExcerpt {...{ post, location }} />
      <footer sx={{ variant: 'special' }} className="entry-meta">
        <Author {...{ post }} />{' '}
        {post.categories.length && (
          <Fragment>
            / <Categories {...{ post }} />
          </Fragment>
        )}
      </footer>
      {location === 'single' && (
        <PrevNextPostNavigation
          ctx={ctx}
          style={{ margin: '2rem 0 0', fontSize: 0 }}
        />
      )}
    </div>
  )
}

export default PostEntryIntro
