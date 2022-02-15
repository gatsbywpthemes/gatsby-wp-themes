import React from "react"
import normalize from "normalize-path"
import { SocialShare } from "~/components/social/SocialShare"
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
    ? post.featuredImage.node.localFile.childImageSharp?.original.src
    : null

  return (
    <article className="card" {...props}>
      {post.featuredImage && (
        <PostEntryMedia
          imageLoading="eager"
          post={post}
          location="single"
          className="mb-10 aspect-w-16 aspect-h-9"
        />
      )}
      <div
        className={`content space-y-5 pb-5 sm:pb-10 ${
          !post.featuredImage && "pt-10"
        }`}
      >
        <PostEntryTitle post={post} location={location} />
        <PostEntryInfo post={post} />
        <PostEntryContent post={post} location={location} />
        <div className="!my-10 divider" />
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
    </article>
  )
}
