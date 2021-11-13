import React from "react"
import normalize from "normalize-path"
import { SocialShare } from "../social/SocialShare"
import { PostEntryContent } from "./PostEntryContent"
import { PostEntryInfo } from "./PostEntryInfo"
import { PostEntryMedia } from "./PostEntryMedia"
import { PostEntryMeta } from "./PostEntryMeta"
import { PostEntryTitle } from "./PostEntryTitle"
import { PrevNextPostNavigation } from "./PrevNextPostNavigation"

export const PostEntry = ({
  isFirst = false,
  post,
  ctx,
  location,
  className = "",
  ...props
}) => {
  const media = post.featuredImage
    ? post.featuredImage.node.localFile.childImageSharp.original.src
    : null

  const { pageTemplate, skipTitle } = post.headlesswp
  return (
    <article className={`card ${className}`} {...props}>
      {post.featuredImage && (
        <PostEntryMedia
          imageLoading="eager"
          post={post}
          location="single"
          className={` ${
            pageTemplate === "full width"
              ? "aspect-w-3 aspect-h-1"
              : "aspect-w-16 aspect-h-9"
          }`}
        />
      )}
      <div
        className={`${pageTemplate === "full width" ? "center-container" : ""}`}
      >
        <div
          className={`${
            pageTemplate === "full width" ? "p-5 sm:p-10 " : ""
          }content space-y-5 pb-5 sm:pb-10 ${!post.featuredImage && "pt-10"}`}
        >
          {!skipTitle && (
            <PostEntryTitle
              post={post}
              location={location}
              className="mx-6 mb-5 sm:mx-8"
            />
          )}
          <PostEntryInfo post={post} className="mb-10 " />
          <PostEntryContent post={post} location={location} />
          <div className="my-12 divider" />

          <PostEntryMeta post={post} />
          <div className="flex justify-center">
            <SocialShare
              url={normalize(`/${post.uri}`)}
              title={post.title}
              media={media}
            />
          </div>
          <PrevNextPostNavigation ctx={ctx} />
        </div>
      </div>
    </article>
  )
}
