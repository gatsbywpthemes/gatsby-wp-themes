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

  const hasSidebar = sidebarWidgets && archiveSidebar
  return (
    <div
      className={`mainContainer  ${
        hasSidebar ? `max-w-xl` : `max-w-${layoutWidth.archive}`
      }`}
    >
      {name && <Archivetitle name={name} text="Posts for " />}
      <Description description={description} />
      <div
        className={`${
          hasSidebar && "lg:grid"
        } xl:grid-cols-3 grid-cols-10 gap-8`}
      >
        <PostsList
          posts={posts}
          className={clsx("xl:col-span-2 col-span-7", {
            "order-2": archiveSidebar === "left",
          })}
        />
        {archiveSidebar && (
          <div className={clsx("xl:col-span-1 col-span-3")}>
            <Sidebar widgets={sidebarWidgets} />
          </div>
        )}
      </div>
      <Pagination ctx={ctx} />
    </div>
  )
}
