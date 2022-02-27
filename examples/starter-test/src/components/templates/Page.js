import React from "react"
import { Layout } from "~/components/Layout"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { Sidebar } from "~/components/Sidebar"
import { ParsedContent, ActivatePageScripts } from "~/utils"
import clsx from "clsx"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-wp-data/src/hooks"

const Page = ({ page, ctx }) => {
  const { title, isFrontPage, content, uri, headlesswp } = page
  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp?.original
  const { widgetAreas, layoutWidth } = useThemeOptions()
  const { sidebarWidgets } = widgetAreas
  const pageTemplate = headlesswp?.pageTemplate || "default"
  const hasSidebar = pageTemplate.includes("sidebar") && sidebarWidgets

  const skipTitle = headlesswp?.skipTitle || false
  const postWidth = layoutWidth.post || "xl"
  return (
    <Layout page={page} type="page">
      <Seo
        isFrontPage={isFrontPage}
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
      <article>
        {!skipTitle && !pageTemplate.includes("full") && (
          <h1
            dangerouslySetInnerHTML={{ __html: title }}
            className="mb-10 text-center"
          />
        )}
        <div className="content">
          <ActivatePageScripts />
          <ParsedContent content={content} />
        </div>
        {hasSidebar && (
          <div className={clsx("xl:col-span-1 col-span-3")}>
            <Sidebar widgets={sidebarWidgets} />
          </div>
        )}
      </article>
    </Layout>
  )
}

export default Page
