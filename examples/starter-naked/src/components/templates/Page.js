import React from "react"
import { Layout } from "../Layout"
import { Sidebar } from "../Sidebar"
import { ParsedContent, ActivatePageScripts } from "../../utils"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import clsx from "clsx"
import loadable from "@loadable/component"

const ContentBlock = loadable(() =>
  import("@gatsbywpthemes/gatsby-theme-acf-builder/src/ContentBlock")
)
const SectionsBlock = loadable(() =>
  import("@gatsbywpthemes/gatsby-theme-acf-builder/src/SectionsBlock")
)

const CoverBlock = loadable(() =>
  import("@gatsbywpthemes/gatsby-theme-acf-builder/src/CoverBlock")
)

const FeaturesBlock = loadable(() =>
  import("@gatsbywpthemes/gatsby-theme-acf-builder/src/FeaturesBlock")
)
const AccordionBlock = loadable(() =>
  import("@gatsbywpthemes/gatsby-theme-acf-builder/src/AccordionBlock")
)
const TestimonialsBlock = loadable(() =>
  import("@gatsbywpthemes/gatsby-theme-acf-builder/src/TestimonialsBlock")
)
const PricingBlock = loadable(() =>
  import("@gatsbywpthemes/gatsby-theme-acf-builder/src/PricingBlock")
)
const Page = ({ page, ctx }) => {
  const {
    title,
    isFrontPage,
    content,
    uri,
    headlesswp,
    layoutBlocks: { blocks },
  } = page
  const { widgetAreas, layoutWidth } = useThemeOptions()
  const { sidebarWidgets } = widgetAreas

  const pageTemplate = headlesswp?.pageTemplate || "default"
  const hasSidebar = pageTemplate.includes("sidebar") && sidebarWidgets

  const skipTitle = headlesswp?.skipTitle || false
  const postWidth = layoutWidth.post || "xl"

  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp.original
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
        <div
          className={`mainContainer mx-auto ${
            hasSidebar
              ? `max-w-xl lg:grid xl:grid-cols-3 grid-cols-10 gap-8`
              : pageTemplate.includes("full")
              ? `max-w-full`
              : `${
                  postWidth === "md"
                    ? "max-w-md"
                    : postWidth === "lg"
                    ? "max-w-lg"
                    : "max-w-xl"
                }`
          }
          }`}
        >
          <div
            className={clsx("pb-5", "xl:col-span-2 col-span-7", "", {
              "order-2": pageTemplate.includes("left"),
              "p-5 sm:p-10 card": !pageTemplate.includes("full"),
            })}
          >
            {!skipTitle && !pageTemplate.includes("full") && (
              <h1
                dangerouslySetInnerHTML={{ __html: title }}
                className="mb-10 text-center"
              />
            )}
            <div className={clsx("content")}>
              <ActivatePageScripts />
              <ParsedContent content={content} />
            </div>
            {blocks?.length > 0 &&
              blocks.map((block) => {
                switch (block.__typename) {
                  case "WpPage_Layoutblocks_Blocks_ContentBlock":
                    return <ContentBlock {...block} />
                  case "WpPage_Layoutblocks_Blocks_SectionsBlock":
                    return <SectionsBlock {...block} />
                  case "WpPage_Layoutblocks_Blocks_CoverBlock":
                    return <CoverBlock {...block} />
                  case "WpPage_Layoutblocks_Blocks_FeaturesBlock":
                    return <FeaturesBlock {...block} />
                  case "WpPage_Layoutblocks_Blocks_AccordionBlock":
                    return <AccordionBlock {...block} />
                  case "WpPage_Layoutblocks_Blocks_TestimonialsBlock":
                    return <TestimonialsBlock {...block} />
                  case "WpPage_Layoutblocks_Blocks_PricingBlock":
                    return <PricingBlock {...block} />

                  default:
                    return null
                }
              })}
          </div>
          {hasSidebar && (
            <div className={clsx("xl:col-span-1 col-span-3")}>
              <Sidebar widgets={sidebarWidgets} />
            </div>
          )}
        </div>
      </article>
    </Layout>
  )
}

export default Page
