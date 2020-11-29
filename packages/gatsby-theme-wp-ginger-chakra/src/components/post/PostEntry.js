import React from 'react'
import {
  PostEntryIntro,
  PostEntryIntroBlog,
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
      {location === 'single' ? (
        <>
          <PostEntryIntro ctx={ctx} post={post} />
          <Tags post={post} location={location} />
          <PrevNextPostNavigation ctx={ctx} />
        </>
      ) : (
        <PostEntryIntroBlog post={post} />
      )}
    </article>
  )
}
