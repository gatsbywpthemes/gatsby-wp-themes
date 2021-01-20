import React from 'react'
import { PostEntryIntroBlog, PostEntryMedia } from 'gingerThemeComponents'

export const PostEntry = ({ isFirst = false, post }) => {
  return (
    <article
      className="entry"
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <PostEntryMedia post={post} imageLoading={isFirst ? 'eager' : 'lazy'} />
      <PostEntryIntroBlog post={post} />
    </article>
  )
}
