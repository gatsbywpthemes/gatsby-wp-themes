import React from 'react'
import { PostEntry, Pagination, ArchiveTitle } from 'gingerThemeComponents'

export const ArchiveContent = ({ posts, ctx, name, text = 'Posts from: ' }) => {
  return (
    <>
      <section>
        {name && <ArchiveTitle text={text} name={name} />}
        {posts.nodes &&
          posts.nodes.map((post) => <PostEntry key={post.id} post={post} />)}
      </section>
      <Pagination ctx={ctx} />
    </>
  )
}
