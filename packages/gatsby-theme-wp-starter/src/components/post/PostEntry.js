/** @jsx jsx */
import {
  jsx,
  Box,
  Center,
  Divider,
  useColorModeValue as colorMode,
} from '@chakra-ui/core'
import React from 'react'
import {
  PostEntryTitle,
  PostEntryMedia,
  PostEntryContent,
  PostEntryMeta,
  PostEntryInfo,
  ReadMoreButton,
  PrevNextPostNavigation,
} from 'starterComponents'
import normalize from 'normalize-path'
import { SocialShare } from 'starterComponents'

export const PostEntry = ({ post, ctx, location, ...props }) => {
  const noImgClass = !post.featuredImage ? 'no-img' : ''
  const media = post.featuredImage
    ? post.featuredImage.node.localFile.childImageSharp.fluid.src
    : null
  return (
    <Box as="article" mb={14} className="entry" {...props}>
      <PostEntryMedia
        location={location}
        post={post}
        className="entry-media"
        sx={{ '.gatsby-image-wrapper': { borderTopRadius: 'lg' } }}
      />

      <Box
        p={[5, 12]}
        bg={colorMode('white', 'ultraDark')}
        boxShadow="lg"
        borderBottomRadius="lg"
        className={`content ${noImgClass}`}
      >
        <PostEntryTitle
          location={location}
          post={post}
          textTransform="uppercase"
          textStyle="h2"
          mb={5}
          className="entry-title"
        />
        <PostEntryInfo className="entry-info" post={post} />

        <PostEntryContent location={location} post={post} />
        {location !== 'single' && (
          <Center height={20}>
            <Divider />
          </Center>
        )}

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
