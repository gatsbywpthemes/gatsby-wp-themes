// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
  PostEntryIntro,
  PostEntryMedia,
  PrevNextPostNavigation,
  Tags,
} from './index'

export const PostEntry = ({
  ctx,
  post,
  isFirst = false,
  location = 'archive',
}) => {
  return (
    <article
      className="entry col-lg-4 mb-4"
      data-sal="fade"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <div className="shadow h-100 d-flex flex-column">
        <PostEntryMedia
          post={post}
          location={location}
          imageLoading={isFirst ? 'eager' : 'lazy'}
        />
        <PostEntryIntro ctx={ctx} post={post} location={location} />
        {location === 'single' && (
          <>
            <Tags post={post} location={location} />
            <PrevNextPostNavigation ctx={ctx} />
          </>
        )}
      </div>
    </article>
  )
}
