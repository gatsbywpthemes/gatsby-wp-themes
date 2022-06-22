import React from "react"
import { Layout } from "~/components/Layout"
import { Comments } from "@gatsbywpthemes/gatsby-theme-wp-comments/src"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { ParsedContent, ActivatePageScripts } from "~/utils"
import { Image, Date } from "~/components/ui-components"
import { Link } from "gatsby"
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
    author,
    categories,
    tags,
  } = post
  console.log("post", post)

  const { avatar: authorPic, name: authorName, uri: authorUri } = author.node

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
          </div>
        </div>
      </article>
      <Comments post={post} />
    </Layout>
  )
}

export default Post
