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
import { card } from '../../styles/card'

const PostEntryIntro = ({
  ctx,
  post,
  location = 'archive',
  variant = 'blog',
}) => {
  return (
    <div
      sx={card[variant]}
      /*       data-sal={location === 'single' ? 'fade' : 'none'}
      data-sal-duration={location === 'single' ? '1000' : '0'}
      data-sal-easing="ease" */
    >
      {location === 'single' && (
        <SocialShare
          url={normalize(`/${post.uri}`)}
          title={post.title}
          media={
            post.featuredImage
              ? post.featuredImage.remoteFile.childImageSharp.fluid.src
              : null
          }
        />
      )}
      <PublicationDate {...{ post, location }} />
      <PostEntryTitle {...{ post, location }} />
      <PostEntryExcerpt {...{ post, location }} />
      <footer sx={{ variant: 'special' }} className="entry-meta">
        <Author {...{ post }} />{' '}
        {post.categories.nodes.length && (
          <Fragment>
            / <Categories {...{ post }} />
          </Fragment>
        )}
      </footer>
      {location === 'single' && (
        <PrevNextPostNavigation
          ctx={ctx}
          style={{ margin: '2rem 0 0', fontSize: 'xxs' }}
        />
      )}
    </div>
  )
}

export default PostEntryIntro
