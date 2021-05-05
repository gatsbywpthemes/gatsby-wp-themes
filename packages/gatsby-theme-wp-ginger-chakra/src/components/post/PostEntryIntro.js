import React from 'react'
import { Box, useColorModeValue, useToken } from '@chakra-ui/react'
import { useThemeColorModeValue } from 'gingerThemeSrc/hooks/useThemeColorModeValue'
import { transparentize } from 'polished'
import {
  PublicationDate,
  PostEntryTitle,
  PostEntryExcerpt,
  Categories,
  Author,
  PrevNextPostNavigation,
  SocialShare,
} from 'gingerThemeComponents'

export const PostEntryIntro = ({ ctx, post }) => {
  return (
    <Box
      layerStyle="info"
      bg={useColorModeValue(
        transparentize(0.15, useToken('colors', 'cardBg')),
        transparentize(0.05, useToken('colors', 'modes.dark.cardBg'))
      )}
      color={useThemeColorModeValue('cardColor')}
      boxShadow={useColorModeValue(
        `0 20px 40px -10px rgba(0,0,0,0.1)`,
        `0 20px 40px -10px rgba(0,0,0,0.3)`
      )}
      borderColor={useThemeColorModeValue('cardBorder')}
      w={['calc(100% - 2rem)', 'calc(100% - 4rem)', '45rem']}
    >
      <SocialShare
        url={post.uri}
        title={post.title}
        media={
          post.featuredImage
            ? post.featuredImage.node.localFile.childImageSharp.original.src
            : null
        }
      />
      <PublicationDate post={post} location="single" />
      <PostEntryTitle post={post} location="single" />
      <PostEntryExcerpt post={post} location="single" />
      <footer className="entry-meta">
        <Author post={post} location="single" />{' '}
        {!!post.categories.nodes.length && (
          <>
            / <Categories {...{ post }} />
          </>
        )}
      </footer>
      <Box as={PrevNextPostNavigation} ctx={ctx} />
    </Box>
  )
}
