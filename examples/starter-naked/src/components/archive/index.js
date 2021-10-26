import React from "react"
import { Archivetitle } from "./ArchiveTitle"
import { Description } from "./Description"
import { Pagination } from "./Pagination"
import { PostsList } from "./PostsList"
import { Sidebar } from "../Sidebar"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import clsx from "clsx"

export const ArchiveContent = ({ posts, ctx, name, description }) => {
  const {
    archiveSidebarPosition: archiveSidebar,
    layoutWidth,
    widgetAreas: { sidebarWidgets },
  } = useThemeOptions()
  return (
    <>
      {name && <Archivetitle name={name} text="Posts for " />}
      <Description description={description} />
      <PostsList posts={posts} className="space-y-10" />
      {archiveSidebar && (
        <div className={clsx("xl:col-span-1 col-span-3")}>
          <Sidebar widgets={sidebarWidgets} />
        </div>
      )}
      <Pagination ctx={ctx} />
    </>
  )
}
