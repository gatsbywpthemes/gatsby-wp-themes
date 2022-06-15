import React from "react"
import { Layout } from "~/components/Layout"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { Sidebar } from "~/components/Sidebar"
import { ParsedContent, ActivatePageScripts } from "~/utils"
import clsx from "clsx"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-wp-data/src/hooks"
import ContentBlock from "@gatsbywpthemes/gatsby-theme-acf-builder/src/ContentBlock"
import SectionsBlock from "@gatsbywpthemes/gatsby-theme-acf-builder/src/SectionsBlock"
import CoverBlock from "@gatsbywpthemes/gatsby-theme-acf-builder/src/CoverBlock"
import FeaturesBlock from "@gatsbywpthemes/gatsby-theme-acf-builder/src/FeaturesBlock"
import AccordionBlock from "@gatsbywpthemes/gatsby-theme-acf-builder/src/AccordionBlock"
import TestimonialsBlock from "@gatsbywpthemes/gatsby-theme-acf-builder/src/TestimonialsBlock"
import PricingBlock from "@gatsbywpthemes/gatsby-theme-acf-builder/src/PricingBlock"
import ProjectsBlock from "@gatsbywpthemes/gatsby-theme-acf-builder/src/ProjectsBlock"
import SpacerBlock from "@gatsbywpthemes/gatsby-theme-acf-builder/src/SpacerBlock"
import LogosBlock from "@gatsbywpthemes/gatsby-theme-acf-builder/src/LogosBlock"

const Page = ({ page, ctx }) => {
  const {
    title,
    isFrontPage,
    content,
    uri,
    headlesswp,
    layoutBlocks: { blocks },
  } = page

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
        {blocks?.length > 0 &&
          blocks.map((block, index) => {
            let blockRef = { ...block, key: index }
            switch (block.__typename) {
              case "WpPage_Layoutblocks_Blocks_ContentBlock":
                return <ContentBlock {...blockRef} />
              case "WpPage_Layoutblocks_Blocks_SectionsBlock":
                return <SectionsBlock {...blockRef} />
              case "WpPage_Layoutblocks_Blocks_CoverBlock":
                return <CoverBlock {...blockRef} />
              case "WpPage_Layoutblocks_Blocks_FeaturesBlock":
                return <FeaturesBlock {...blockRef} />
              case "WpPage_Layoutblocks_Blocks_AccordionBlock":
                return <AccordionBlock {...blockRef} />
              case "WpPage_Layoutblocks_Blocks_TestimonialsBlock":
                return <TestimonialsBlock {...blockRef} />
              case "WpPage_Layoutblocks_Blocks_PricingBlock":
                return <PricingBlock {...blockRef} />
              case "WpPage_Layoutblocks_Blocks_ProjectsBlock":
                return <ProjectsBlock {...blockRef} />
              case "WpPage_Layoutblocks_Blocks_SpacerBlock":
                return <SpacerBlock {...blockRef} />
              case "WpPage_Layoutblocks_Blocks_LogosBlock":
                return <LogosBlock {...blockRef} />
              default:
                return null
            }
          })}
      </article>
    </Layout>
  )
}

export default Page
