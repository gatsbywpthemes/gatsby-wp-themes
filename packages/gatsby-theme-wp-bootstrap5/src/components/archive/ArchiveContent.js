import React from 'react'
import { PostEntry } from '../post'
import { Pagination, ArchiveTitle } from './index'
import { Sidebar } from '../index'

export const ArchiveContent = ({
  posts,
  ctx,
  name,
  text = 'Posts from: ',
  ...props
}) => {
  return (
    <>
      <section className="my-5" {...props}>
        {name && <ArchiveTitle text={text} name={name} />}
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              {posts.nodes &&
                posts.nodes.map((post) => (
                  <PostEntry key={post.id} post={post} />
                ))}
              <Pagination ctx={ctx} />
            </div>
          </div>
          <Sidebar />
        </div>
      </section>
    </>
  )
}
