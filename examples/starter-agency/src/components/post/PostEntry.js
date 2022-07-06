import React from "react"
import { ParsedContent, ActivatePageScripts } from "~/utils"
import { Image } from "~/components/ui-components"
import { Date } from "./Date"
import { Link } from "gatsby"
import { PrevNextPostNavigation } from "./PrevNextPostNavigation"
import { PostEntryMeta } from "./PostEntryMeta"
import { PostBlocks } from "~/components/blocks/PostBlocks"
import { useBuilder } from "~/lib/hooks/useBuilder"

export const PostEntry = ({ post, ctx, ...props }) => {
  const {
    title,
    content,
    layoutBlocks: { blocks },
    author,
  } = post

  const { avatar: authorPic, name: authorName, uri: authorUri } = author.node

  const { posts } = useBuilder()
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
        <h1 className="mb-3 text-center">{title}</h1>
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
          {posts ? (
            <PostBlocks blocks={blocks} />
          ) : (
            <div className="content">
              <ActivatePageScripts />
              <ParsedContent content={content} />
            </div>
          )}

          <PostEntryMeta post={post} />
          <PrevNextPostNavigation prev={ctx.prev} next={ctx.next} />
        </div>
      </div>
    </article>
  )
}
