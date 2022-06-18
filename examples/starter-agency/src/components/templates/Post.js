import React from "react"
import { Layout } from "~/components/Layout"
import { Sidebar } from "~/components/Sidebar"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-wp-data/src/hooks"
import { Comments } from "@gatsbywpthemes/gatsby-theme-wp-comments/src"
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
import clsx from "clsx"

const Post = ({ post, ctx }) => {
  const {
    title,
    content,
    uri,
    headlesswp,
    layoutBlocks: { blocks },
  } = post
  console.log(blocks)
  const { widgetAreas, layoutWidth } = useThemeOptions()

  const pageTemplate = headlesswp?.pageTemplate || "default"
  const { sidebarWidgets } = widgetAreas

  const hasSidebar = pageTemplate.includes("sidebar") && sidebarWidgets

  const postWidth = layoutWidth.post || "xl"
  const featuredImage =
    post.featuredImage?.node.localFile.childImageSharp?.original
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

      <article>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        {blocks?.length > 0 &&
          blocks.map((block, index) => {
            let blockRef = { ...block, key: index }
            switch (block.__typename) {
              case "WpPost_Layoutblocks_Blocks_ContentBlock":
                return <ContentBlock {...blockRef} />
              case "WpPost_Layoutblocks_Blocks_SectionsBlock":
                return <SectionsBlock {...blockRef} />
              case "WpPost_Layoutblocks_Blocks_CoverBlock":
                return <CoverBlock {...blockRef} />
              case "WpPost_Layoutblocks_Blocks_FeaturesBlock":
                return <FeaturesBlock {...blockRef} />
              case "WpPost_Layoutblocks_Blocks_AccordionBlock":
                return <AccordionBlock {...blockRef} />
              case "WpPost_Layoutblocks_Blocks_TestimonialsBlock":
                return <TestimonialsBlock {...blockRef} />
              case "WpPost_Layoutblocks_Blocks_PricingBlock":
                return <PricingBlock {...blockRef} />
              case "WpPost_Layoutblocks_Blocks_ProjectsBlock":
                return <ProjectsBlock {...blockRef} />
              case "WpPost_Layoutblocks_Blocks_SpacerBlock":
                return <SpacerBlock {...blockRef} />
              case "WpPost_Layoutblocks_Blocks_LogosBlock":
                return <LogosBlock {...blockRef} />
              case "WpPost_Layoutblocks_Blocks_LastsPostsBlock":
                return <LastsPostsBlock {...blockRef} />
              case "WpPost_Layoutblocks_Blocks_GalleryPostsBlock":
                return <GalleryBlock {...blockRef} />
              default:
                return null
            }
          })}
        <div className="content">
          <ActivatePageScripts />
          <ParsedContent content={post.content} />
        </div>
        {hasSidebar && (
          <div className={clsx("xl:col-span-1 col-span-4 mt-10 lg:mt-0")}>
            <Sidebar widgets={sidebarWidgets} />
          </div>
        )}
      </article>
      <Comments post={post} />
    </Layout>
  )
}

export default Post
