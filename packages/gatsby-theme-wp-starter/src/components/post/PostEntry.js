import React from 'react'
import {
  Box,
  Center,
  Divider,
  useColorModeValue as colorMode,
} from '@chakra-ui/react'

import {
  PostEntryTitle,
  PostEntryMedia,
  PostEntryContent,
  PostEntryMeta,
  PostEntryInfo,
  ReadMoreButton,
  PrevNextPostNavigation,
  SocialShare,
} from 'starterComponents'
import { Card } from 'starterUiComponents'
import normalize from 'normalize-path'

export const PostEntry = ({ post, ctx, location, ...props }) => {
  const noImgClass = !post.featuredImage ? 'no-img' : ''
  const media = post.featuredImage
    ? post.featuredImage.node.localFile.childImageSharp.fluid.src
    : null
  return (
    <Box
      as="article"
      mb={14}
      className="entry"
      {...props}
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <PostEntryMedia
        location={location}
        post={post}
        className="entry-media"
        sx={{ '.gatsby-image-wrapper': { borderTopRadius: 'lg' } }}
      />

      <Card
        borderTopRadius={media ? 0 : 'lg'}
        className={`content ${noImgClass}`}
      >
        <PostEntryTitle
          location={location}
          post={post}
          textTransform="uppercase"
          fontSize={['2xl', '3xl']}
          mb={5}
          className="entry-title"
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
        />
        <PostEntryInfo className="entry-info" post={post} />

        <PostEntryContent
          location={location}
          post={post}
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
        />
        {location !== 'single' && (
          <Center height={20}>
            <Divider />
          </Center>
        )}

        <div className="entry-footer">
          <PostEntryMeta
            className="entry-meta"
            post={post}
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
          />
          <ReadMoreButton
            location={location}
            post={post}
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
          />
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
      </Card>
    </Box>
  )
}
