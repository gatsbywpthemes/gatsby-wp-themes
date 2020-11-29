import React from 'react'
import { Box, useColorModeValue, useToken } from '@chakra-ui/react'
import { transparentize } from 'polished'
import {
  PublicationDate,
  PostEntryTitle,
  PostEntryExcerpt,
  Categories,
  Author,
  PrevNextPostNavigation,
} from './index'
import { SocialShare } from '../social'

export const PostEntryIntro = ({ ctx, post, variant = 'blog' }) => {
  return (
    <Box
      layerStyle="info"
      bg={useColorModeValue(
        transparentize(0.15, useToken('colors', 'cardBg')),
        transparentize(0.05, useToken('colors', 'modes.dark.cardBg'))
      )}
      color={useColorModeValue('cardColor', 'modes.dark.cardColor')}
      boxShadow={useColorModeValue(
        `0 20px 40px -10px rgba(0,0,0,0.1)`,
        `0 20px 40px -10px rgba(0,0,0,0.3)`
      )}
      borderColor={useColorModeValue('cardBorder', 'modes.dark.cardBorder')}
      w={['calc(100% - 2rem)', 'calc(100% - 4rem)', '45rem']}
    >
      <SocialShare
        url={post.uri}
        title={post.title}
        media={
          post.featuredImage
            ? post.featuredImage.node.localFile.childImageSharp.fluid.src
            : null
        }
      />
      <PublicationDate post={post} location="single" />
      <PostEntryTitle post={post} location="single" />
      <PostEntryExcerpt post={post} location="single" />
      <footer sx={{ variant: 'special' }} className="entry-meta">
        <Author post={post} location="single" />{' '}
        {post.categories.nodes.length && (
          <>
            / <Categories {...{ post }} />
          </>
        )}
      </footer>
      <Box as={PrevNextPostNavigation} ctx={ctx} />
    </Box>
  )
}
