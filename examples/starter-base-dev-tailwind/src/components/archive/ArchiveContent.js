import React from "react"
import { Flex } from "@chakra-ui/react"
import { Container } from "baseUiComponents"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { Sidebar } from "baseComponents"
import { ArchiveTitle, PostsList, Pagination } from "baseComponents"
import { useLayoutWidth } from "baseUtils/hooks"
import clsx from "clsx"

export const ArchiveContent = ({ posts, ctx, name }) => {
  const {
    archiveSidebarPosition: archiveSidebar,
    widgetAreas: { sidebarWidgets },
  } = useThemeOptions()
  const [archiveWidth, xl] = useLayoutWidth("archive")

  const containerStyles =
    sidebarWidgets && archiveSidebar
      ? {
          maxWidth: xl,
          ".posts-list": {
            width: { base: "100%", lg: "67%", xl: "70%" },
          },
          ".sidebar": { width: { base: "100%", lg: "33%", xl: "30%" } },
        }
      : { maxWidth: archiveWidth() }

  const sidebarSide =
    sidebarWidgets && archiveSidebar
      ? archiveSidebar === `left`
        ? {
            flexDirection: `row-reverse`,
            ".posts-list": {
              pl: { base: 0, lg: 8 },
            },
          }
        : {
            ".posts-list": {
              pr: { base: 0, lg: 8 },
            },
          }
      : ""

  return (
    <Container className={`mainContainer`} sx={{ ...containerStyles }}>
      {name && <ArchiveTitle text="Posts from: " name={name} />}x
      <div
        sx={{
          ...sidebarSide,
          flexWrap: { base: `wrap`, lg: `wrap` },
          alignItems: `flex-start`,
        }}
        className={clsx("flex flex-wrap items-start", {
          "flex-row-reverse": sidebarWidgets && archiveSidebar === "left",
        })}
      >
        <PostsList
          posts={posts}
          className={`${
            sidebarWidgets && archiveSidebar
              ? archiveSidebar === "left"
                ? "pl-0 lg:pl-8"
                : "pr-0 lg:pr-8"
              : ""
          }`}
        />
        {archiveSidebar && <Sidebar widgets={sidebarWidgets} />}
      </div>
      <Pagination ctx={ctx} />
    </Container>
  )
}
