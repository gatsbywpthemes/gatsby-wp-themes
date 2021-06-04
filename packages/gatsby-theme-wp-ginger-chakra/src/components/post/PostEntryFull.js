import React from 'react'
import { Flex, Box, Container } from '@chakra-ui/react'
import {
  PostEntryIntro,
  PostEntryContent,
  PrevNextPostNavigation,
  Tags,
  ScrollToContentButton,
  Comments,
  Image,
} from 'gingerThemeComponents'
import { gutenbergStyles } from 'gingerThemeStyles'
import { useThemeColorModeValue } from 'gingerThemeSrc/hooks/useThemeColorModeValue'

export const PostEntryFull = ({ ctx, post }) => {
  return (
    <article>
      <header data-sal="fade" data-sal-duration="1000" data-sal-easing="ease">
        <Flex
          justify="center"
          align="center"
          direction="column"
          sx={{
            position: 'relative',
            zIndex: 1,
            height: ['auto', 'auto', '100vh'],
            minHeight: (theme) => [
              `none`,
              `calc(100vh - ${theme.sizes.header[1]})`,
              '100vh',
            ],
            py: [24, 0],
            backgroundColor: useThemeColorModeValue('splashBg'),
            boxShadow: ['none', 'none', '0 20px 60px -10px rgba(0,0,0,0.2)'],
          }}
        >
          <Box
            className="featured-wrapper"
            sx={{
              position: 'absolute',
              zIndex: '-3',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              '.gatsby-image-wrapper': {
                width: '100%',
                height: '100%',
              },
            }}
          >
            <Image img={post.featuredImage} />
          </Box>
          <PostEntryIntro post={post} ctx={ctx} />
          <ScrollToContentButton />
        </Flex>
      </header>
      <Box id="content" py={[8, 8, 16]}>
        <Box sx={{ ...gutenbergStyles }}>
          <PostEntryContent ctx={ctx} content={post.content} />
          {post.tags.nodes.length > 0 && <Tags tags={post.tags.nodes} />}
          <PrevNextPostNavigation ctx={ctx} />
        </Box>
      </Box>
      <Comments post={post} />
    </article>
  )
}
