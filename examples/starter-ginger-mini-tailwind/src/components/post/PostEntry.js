import React from "react"
import normalize from "normalize-path"
import { SocialShare } from "~/components/social/SocialShare"
import { PostEntryContent } from "./PostEntryContent"
import { PostEntryInfo } from "./PostEntryInfo"
import { PostEntryMedia } from "./PostEntryMedia"
import { PostEntryMeta } from "./PostEntryMeta"
import { PostEntryTitle } from "./PostEntryTitle"
import { PrevNextPostNavigation } from "./PrevNextPostNavigation"
import { TaxonomyItem } from "./TaxonomyItem"

export const PostEntry = ({
  isFirst = false,
  post,
  ctx,
  location,
  className = "",
  ...props
}) => {
  const media = post.featuredImage
    ? post.featuredImage.node.localFile.childImageSharp?.original.src
    : null

  const { skipTitle } = post.headlesswp
  const taxonomies = post["tags"].nodes

  return (
    <article className={`not-card single-blog-post ${className}`} {...props}>
      <header data-sal="fade" data-sal-duration="1000" data-sal-easing="ease">
        <div className="relative h-[70vh] lg:min-h-screen lg:h-screen blog-header">
          <div className="absolute inset-0 w-full h-full featured-wrapper">
            {post.featuredImage && (
              <PostEntryMedia
                imageLoading="eager"
                post={post}
                location="single"
                className="w-full h-full"
              />
            )}
          </div>
          <div className="absolute inset-0 flex items-center justify-center content">
            <div
              className="t-w lg:w-[45rem] bg-cardBg z-[1] relative text-center bg-opacity-80
             border-[0.5rem] lg:border-[0.75rem] px-8 py-6 border-cardBorder dark:border-dark-cardBorder dark:bg-dark-cardBg dark:bg-opacity-90"
            >
              <div className="flex justify-center">
                <SocialShare
                  url={normalize(`/${post.uri}`)}
                  title={post.title}
                  media={media}
                />
              </div>
              <PostEntryInfo post={post} className="mb-3" />
              {!skipTitle && (
                <PostEntryTitle
                  post={post}
                  location={location}
                  className="mb-5 text-5xl"
                />
              )}
              <PostEntryMeta
                className="!text-sm uppercase tracking-widest"
                post={post}
              />
              <PrevNextPostNavigation ctx={ctx} />
              {/* <ScrollToContentButton /> */}
            </div>
          </div>
        </div>
      </header>
      <div className={`mb-10 lg:pt-10`}>
        <PostEntryContent post={post} location={location} />
        <div className="my-6 content lg:my-10">
          <h4 className="text-4xl lg:text-5xl">Tags:</h4>
          <div className="flex mt-4 space-x-2 text-sm box">
            {taxonomies.map((cat, index) => (
              <>
                <TaxonomyItem
                  key={cat.slug}
                  taxName="category"
                  item={cat}
                  className="inline-block tracking-widest uppercase"
                />
                {index !== taxonomies.length - 1 && <span>·</span>}
              </>
            ))}
          </div>
        </div>
        <div className="mb-10 content lg:mb-20">
          <PrevNextPostNavigation ctx={ctx} />
        </div>
      </div>
    </article>
  )
}
