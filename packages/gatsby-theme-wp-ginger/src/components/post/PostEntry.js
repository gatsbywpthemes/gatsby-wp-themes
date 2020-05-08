/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
  PostEntryIntro,
  PostEntryMedia,
  PrevNextPostNavigation,
  Tags,
} from './index'

export const PostEntry = ({ ctx, post, location = 'archive' }) => {
  return (
    <article
      className="entry"
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <PostEntryMedia post={post} location={location} />
      <PostEntryIntro ctx={ctx} post={post} location={location} />
      {location === 'single' && (
        <>
          <Tags post={post} location={location} />
          <PrevNextPostNavigation ctx={ctx} />
        </>
      )}
    </article>
  )
}
