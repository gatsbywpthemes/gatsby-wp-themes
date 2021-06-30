import React from 'react'
import {
  PostEntry,
  Pagination,
  ArchiveTitle,
  Description,
} from 'gingerThemeComponents'

export const ArchiveContent = ({
  posts,
  ctx,
  name,
  text = 'Posts from: ',
  description,
}) => {
  return (
    <main>
      <section>
        {name && <ArchiveTitle text={text} name={name} />}
        {description && <Description description={description} />}
        {posts.nodes &&
          posts.nodes.map((post, index) => (
            <PostEntry key={post.id} post={post} isFirst={index === 0} />
          ))}
      </section>
      <Pagination ctx={ctx} />
    </main>
  )
}
