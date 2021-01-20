import React from 'react'
import { PostEntry, Pagination, ArchiveTitle } from 'gingerThemeComponents'

export const ArchiveContent = ({ posts, ctx, name, text = 'Posts from: ' }) => {
  return (
    <>
      <section>
        {name && <ArchiveTitle text={text} name={name} />}
        {posts.nodes &&
          posts.nodes.map((post, index) => (
            <PostEntry key={post.id} post={post} isFirst={index === 0} />
          ))}
      </section>
      <Pagination ctx={ctx} />
    </>
  )
}
