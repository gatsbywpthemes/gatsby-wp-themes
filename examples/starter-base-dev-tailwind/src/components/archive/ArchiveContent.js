import React from "react"
import { Container } from "baseUiComponents"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { Sidebar } from "baseComponents"
import { ArchiveTitle, PostsList, Pagination } from "baseComponents"
import clsx from "clsx"

export const ArchiveContent = ({ posts, ctx, name }) => {
  const {
    archiveSidebarPosition: archiveSidebar,
    layoutWidth,
    widgetAreas: { sidebarWidgets },
  } = useThemeOptions()

  return (
    <Container
      className={`mainContainer  ${
        sidebarWidgets && archiveSidebar
          ? `max-w-xl`
          : `max-w-${layoutWidth.archive}`
      }`}
    >
      {name && <ArchiveTitle text="Posts from: " name={name} />}
      <div className={clsx("lg:grid xl:grid-cols-3 grid-cols-10 gap-8")}>
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
    </Container>
  )
}
