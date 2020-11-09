/** @jsx jsx */
import { jsx, Box } from '@chakra-ui/core'
import React from 'react'
import {
  PostEntryTitle,
  PostEntryMedia,
  PostEntryContent,
  PostEntryMeta,
  PostEntryInfo,
  ReadMoreButton,
  PrevNextPostNavigation,
} from './index'
import normalize from 'normalize-path'
import { SocialShare } from '../social'

export const PostEntry = ({ post, ctx, location, ...props }) => {
  const noImgClass = !post.featuredImage ? 'no-img' : ''
  const media = post.featuredImage
    ? post.featuredImage.node.localFile.childImageSharp.fluid.src
    : null
  return (
    <Box
      as="article"
      mb={14}
      bg="white"
      boxShadow="lg"
      className="entry"
      borderBottomRadius="lg"
      {...props}
    >
      <PostEntryMedia
        location={location}
        post={post}
        className="entry-media"
        sx={{ '.gatsby-image-wrapper': { borderTopRadius: 'lg' } }}
      />

      <Box p={[5, 12]} className={`content ${noImgClass}`}>
        <PostEntryTitle
          location={location}
          post={post}
          className="entry-title"
        />
        <PostEntryInfo className="entry-info" post={post} />

        <PostEntryContent location={location} post={post} />

        <div className="entry-footer">
          <PostEntryMeta className="entry-meta" post={post} />
          <ReadMoreButton location={location} post={post} />
        </div>
        {location === 'single' && (
          <>
            <SocialShare
              url={normalize(`/${post.uri}`)}
              title={post.title}
              media={media}
            />
            <PrevNextPostNavigation ctx={ctx} />
          </>
        )}
      </Box>
    </Box>
  )
}
