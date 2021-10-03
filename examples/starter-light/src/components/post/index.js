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
  console.log("ctx", ctx)
  const media = post.featuredImage
    ? post.featuredImage.node.localFile.childImageSharp.original.src
    : null

  const { pageTemplate, skipTitle } = post.headlesswp
  return (
    <article {...props}>
      {post.featuredImage && (
        <PostEntryMedia
          imageLoading="eager"
          post={post}
          location="single"
          className="mb-10"
        />
      )}
      <div
        className={`${
          pageTemplate === "full width" ? "center-container" : ""
        } space-y-5`}
      >
        {!skipTitle && <PostEntryTitle post={post} location={location} />}
        <PostEntryInfo post={post} />
        <PostEntryContent post={post} location={location} />
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
