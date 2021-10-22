import React from "react"
import { ArchiveTitle, PostsList, Pagination } from "./index"
import clsx from "clsx"

export const ArchiveContent = ({ posts, ctx, name }) => {
  return (
    <div className="container" className={`mainContainer`}>
      {name && <ArchiveTitle text="Posts from: " name={name} />}
      <div className={clsx("lg:grid xl:grid-cols-3 grid-cols-10 gap-8")}>
        <PostsList posts={posts} className={clsx("xl:col-span-2 col-span-7")} />
      </div>
      <Pagination ctx={ctx} />
    </div>
  )
}
