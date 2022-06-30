import React from "react"
import { ParsedContent, ActivatePageScripts } from "~/utils"
import { Image } from "~/components/ui-components"
import { Date } from "./Date"
import { Link } from "gatsby"
import { PrevNextPostNavigation } from "./PrevNextPostNavigation"
import { PostEntryMeta } from "./PostEntryMeta"
// import Blocks from "~/components/Blocks"
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

export const PostEntry = ({ post, ctx, ...props }) => {
  const {
    title,
    content,
    layoutBlocks: { blocks },
    author,
    categories,
    tags,
  } = post

  const { avatar: authorPic, name: authorName, uri: authorUri } = author.node
  return (
    <article {...props}>
      {post.featuredImage && (
        <div className="relative">
          <Image
            img={post.featuredImage.node}
            className="-mx-5 -mt-16 md:-mx-6 lg:-mx-10 h-[250px] lg:h-[400px] "
          />
        </div>
      )}
      <div
        className={`max-w-[1200px] mx-auto bg-white pt-10 relative  ${
          post.featuredImage && "relative lg:-top-[200px] lg:-mb-[200px]"
        }`}
      >
        <div className="flex justify-center -mt-[90px] mb-10">
          <img
            src={authorPic.url}
            alt={authorName}
            className="border-4 border-white rounded-full"
          />
        </div>
        <h1 className="mb-3 text-center">{post.title}</h1>
        <div className="flex justify-center mb-10 text-neutral-600">
          <div>
            <Link to={authorUri} className="hover:text-highlight">
              {" "}
              {authorName}{" "}
            </Link>
            . <Date date={post.date} />
          </div>
        </div>
        <div />

        <div className="max-w-md mx-auto content">
          <ActivatePageScripts />
          <ParsedContent content={content} />
          {/* <Blocks blocks={blocks} /> */}
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

          <PostEntryMeta post={post} />
          <PrevNextPostNavigation prev={ctx.prev} next={ctx.next} />
        </div>
      </div>
    </article>
  )
}
