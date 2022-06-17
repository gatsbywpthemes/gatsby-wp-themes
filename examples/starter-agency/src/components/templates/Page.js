import React from "react"
import { Layout } from "~/components/Layout"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { ParsedContent, ActivatePageScripts } from "~/utils"
import {
  ContentBlock,
  SectionsBlock,
  CoverBlock,
  FeaturesBlock,
  AccordionBlock,
  TestimonialsBlock,
  PricingBlock,
  ProjectsBlock,
  SpacerBlock,
  LogosBlock,
  LastsPostsBlock,
  GalleryBlock,
} from "@gatsbywpthemes/gatsby-theme-acf-builder/src"

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
  const pageTemplate = headlesswp?.pageTemplate || "default"

  const skipTitle = headlesswp?.skipTitle || false

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
              case "WpPage_Layoutblocks_Blocks_LastsPostsBlock":
                return <LastsPostsBlock {...blockRef} />
              case "WpPage_Layoutblocks_Blocks_GalleryPostsBlock":
                return <GalleryBlock {...blockRef} />
              default:
                return null
            }
          })}
      </article>
    </Layout>
  )
}

export default Page
