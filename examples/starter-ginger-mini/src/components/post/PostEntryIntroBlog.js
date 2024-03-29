import React from 'react'
import {
  PublicationDate,
  PostEntryTitle,
  PostEntryExcerpt,
  Categories,
  Author,
} from 'gingerThemeComponents'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { useThemeColorModeValue } from 'gingerThemeSrc/hooks/useThemeColorModeValue'

export const PostEntryIntroBlog = ({ post }) => {
  return (
    <Box
      layerStyle="info"
      bg={useThemeColorModeValue('cardBg')}
      color={useThemeColorModeValue('cardColor')}
      boxShadow={useColorModeValue(
        `0 20px 40px -10px rgba(0,0,0,0.1)`,
        `0 20px 40px -10px rgba(0,0,0,0.3)`
      )}
      borderColor={useThemeColorModeValue('cardBorder')}
      w={['calc(100% - 2rem)', '75%']}
      mx="auto"
      mb={[12, 24]}
      sx={{
        '* + &': {
          mb: 0,
          transform: [`translate3d(0, -1.5rem, 0)`, `translate3d(0, -4rem, 0)`],
        },
      }}
    >
      <PublicationDate post={post} location="archive" />
      <PostEntryTitle post={post} location="archive" />
      <PostEntryExcerpt post={post} location="archive" />
      <footer className="entry-meta">
        <Author post={post} />{' '}
        {!!post.categories.nodes.length && (
          <>
            / <Categories post={post} />
          </>
        )}
      </footer>
    </Box>
  )
}
