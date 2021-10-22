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
  ...props
}) => {
  const media = post.featuredImage
    ? post.featuredImage.node.localFile.childImageSharp.original.src
    : null

  const { pageTemplate, skipTitle } = post.headlesswp
  return (
    <article
      className={`${pageTemplate === "full width" ? "" : "card"}`}
      {...props}
    >
      {post.featuredImage && (
        <PostEntryMedia
          imageLoading="eager"
          post={post}
          location="single"
          className={`mb-10 ${
            pageTemplate === "full width"
              ? "aspect-w-3 aspect-h-1"
              : "aspect-w-16 aspect-h-9"
          }`}
        />
      )}
      <div
        className={`${
          pageTemplate === "full width"
            ? "center-container"
            : "p-5 sm:pt-5 sm:p-10"
        } space-y-5`}
      >
        {!skipTitle && <PostEntryTitle post={post} location={location} />}
        <PostEntryInfo post={post} />
        <PostEntryContent post={post} location={location} />
        <div className="!my-10 divider" />
        <div className="entry-footer">
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
