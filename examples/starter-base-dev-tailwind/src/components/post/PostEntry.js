import React from "react"
import { Box, Center, Divider } from "@chakra-ui/react"

import {
  PostEntryTitle,
  PostEntryMedia,
  PostEntryContent,
  PostEntryMeta,
  PostEntryInfo,
  ReadMoreButton,
  PrevNextPostNavigation,
  SocialShare,
} from "baseComponents"
import { Card } from "baseUiComponents"
import normalize from "normalize-path"

export const PostEntry = ({
  isFirst = false,
  post,
  ctx,
  location,
  ...props
}) => {
  const withImgClass = post.featuredImage ? "withImg" : ""
  const pageTemplate = post.headlesswp?.pageTemplate || "default"
  const media = post.featuredImage
    ? post.featuredImage.node.localFile.childImageSharp.original.src
    : null

  return (
    <article className="entry mb-14" {...props}>
      <PostEntryMedia
        location={location}
        post={post}
        className="entry-media"
        imageLoading={isFirst ? "eager" : "lazy"}
        // mb={-2}
        css={{
          ".gatsby-image-wrapper":
            pageTemplate === "full width" && location === "single"
              ? { height: 500 }
              : {
                  borderRadius: "8px 8px 0 0",
                },
        }}
      />

      <Card
        borderTopRadius={media ? 0 : "lg"}
        className={`content ${withImgClass}`}
        sx={{
          "&.withImg": {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        }}
      >
        <PostEntryTitle
          location={location}
          post={post}
          textTransform="uppercase"
          fontSize={["2xl", "3xl"]}
          mb={5}
          className="entry-title"
        />
        <PostEntryInfo className="entry-info" post={post} />

        <PostEntryContent location={location} post={post} />
        {location !== "single" && (
          <Center height={20}>
            <Divider />
          </Center>
        )}

        <div className="entry-footer">
          <PostEntryMeta className="entry-meta" post={post} />
          <ReadMoreButton location={location} post={post} />
        </div>
        {location === "single" && (
          <>
            <SocialShare
              url={normalize(`/${post.uri}`)}
              title={post.title}
              media={media}
            />
            <PrevNextPostNavigation ctx={ctx} />
          </>
        )}
      </Card>
    </article>
  )
}
