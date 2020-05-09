/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import {
  PublicationDate,
  PostEntryTitle,
  PostEntryExcerpt,
  Categories,
  Author,
  PrevNextPostNavigation,
} from './index'
import { SocialShare } from '../social'
import normalize from 'normalize-path'
import { card } from '../../styles/card'

export const PostEntryIntro = ({
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
              ? post.featuredImage.localFile.childImageSharp.fluid.src
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
