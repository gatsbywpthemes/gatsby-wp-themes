import React from "react"
import { Layout } from "../Layout"
import { Sidebar } from "../Sidebar"
import { PostEntry } from "../post"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import clsx from "clsx"

const Post = ({ post, ctx }) => {
  const { title, uri, headlesswp } = post
  const { widgetAreas, layoutWidth } = useThemeOptions()

  const pageTemplate = headlesswp?.pageTemplate || "default"
  const { sidebarWidgets } = widgetAreas

  const hasSidebar = pageTemplate.includes("sidebar") && sidebarWidgets

  const featuredImage =
    post.featuredImage?.node.localFile.childImageSharp.original

  return (
    <Layout page={post} type="post">
      <Seo
        title={title}
        uri={uri}
        yoastSeo={ctx.yoastSeo}
        seo={ctx.seo}
        featuredImage={
          featuredImage && {
            src: featuredImage.src,
            width: featuredImage.width,
            height: featuredImage.height,
          }
        }
      />
      <div
        className={`mainContainer ${
          hasSidebar
            ? `max-w-xl lg:grid xl:grid-cols-3 grid-cols-10 gap-8`
            : pageTemplate.includes("full")
            ? `max-w-full`
            : `max-w-${layoutWidth.post}`
        }`}
      >
        <PostEntry
          location="single"
          post={post}
          ctx={ctx}
          className={clsx("xl:col-span-2 col-span-7", "space-y-10", {
            "order-2": pageTemplate.includes("left"),
          })}
        />
        {hasSidebar && (
          <div className={clsx("xl:col-span-1 col-span-3")}>
            <Sidebar widgets={sidebarWidgets} />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Post
