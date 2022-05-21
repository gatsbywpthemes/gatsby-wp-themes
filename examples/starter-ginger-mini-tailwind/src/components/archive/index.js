import React from "react"
import { Archivetitle } from "./ArchiveTitle"
import { Description } from "./Description"
import { Pagination } from "./Pagination"
import { PostsList } from "./PostsList"
import { Sidebar } from "~/components/Sidebar"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import clsx from "clsx"

export const Archive = ({ posts, ctx, name, description }) => {
  const {
    archiveSidebarPosition: archiveSidebar,

    widgetAreas: { sidebarWidgets },
  } = useThemeOptions()

  const hasSidebar = sidebarWidgets && archiveSidebar

  return (
    <div className="max-w-lg p-4 py-8 mx-auto mainContainer">
      {name && (
        <Archivetitle name={name} text="Posts Form:" className="mb-10" />
      )}
      {description && (
        <Description description={description} className="mb-10" />
      )}

      <div
        className={`${
          hasSidebar && "lg:grid"
        } xl:grid-cols-3 grid-cols-10 gap-8`}
      >
        <PostsList
          posts={posts}
          className={clsx(
            "xl:col-span-2 col-span-6",
            "space-y-10 lg:space-y-14",
            {
              "order-2": archiveSidebar === "left",
            }
          )}
        />
        {hasSidebar && (
          <div className={clsx("xl:col-span-1 col-span-4 mt-10 lg:mt-0")}>
            <Sidebar widgets={sidebarWidgets} />
          </div>
        )}
      </div>
      <Pagination ctx={ctx} />
    </div>
  )
}
