import React from 'react'
import {
  PostEntryIntro,
  PostEntryIntroBlog,
  PostEntryMedia,
  PrevNextPostNavigation,
  Tags,
} from 'gingerThemeComponents'

export const PostEntry = ({ post }) => {
  return (
    <article
      className="entry"
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <PostEntryMedia post={post} />
      <PostEntryIntroBlog post={post} />
    </article>
  )
}
