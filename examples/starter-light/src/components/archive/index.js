import React from "react"
import { Archivetitle } from "./ArchiveTitle"
import { Description } from "./Description"
import { Pagination } from "./Pagination"
import { PostsList } from "./PostsList"

export const Archive = ({ posts, ctx, name, description }) => {
  return (
    <>
      {name && <Archivetitle name={name} text="Posts for " />}
      {description && <Description description={description} />}
      <PostsList posts={posts} className="space-y-10" />
      <Pagination ctx={ctx} />
    </>
  )
}
