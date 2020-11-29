import React from 'react'
import { PostEntry } from '../post'
import { Pagination, ArchiveTitle } from './index'

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
