/** @jsx jsx */
import { Flex, jsx, useColorMode } from 'theme-ui'
import {
  PostEntryIntro,
  PostEntryContent,
  PrevNextPostNavigation,
  Tags,
} from './index'

import { CommentsList } from '../comments'
import { FiChevronsDown } from 'react-icons/fi'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { articleStyles, commentsSectionStyles } from '../../styles/'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { Image } from '../images'
import { DiscussionEmbed } from 'disqus-react'

export const PostEntryFull = ({ ctx, post }) => {
  const bgStyles = !!post.featuredImage
    ? {
        backgroundImage: `url(${post.featuredImage.node.localFile.childImageSharp.fluid.src})`,
      }
    : {}
  const { addWordPressComments, disqus } = useThemeOptions()
  const disqusConfig = {
    shortname: disqus,
    config: {
      identifier: post.slug,
      title: post.title,
    },
  }
  // in order to reload disqus and apply correct text color when color mode changes
  const [colorMode] = useColorMode()

  return (
    <article>
      <header data-sal="fade" data-sal-duration="1000" data-sal-easing="ease">
        <Flex
          sx={{
            ...articleStyles.full.splash,
            ...bgStyles,
          }}
          className="splash"
        >
          <div
            className="featured-wrapper"
            sx={{
              display: 'none',
              position: 'absolute',
              zIndex: '-3',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <Image img={post.featuredImage} />
          </div>
          <PostEntryIntro
            post={post}
            ctx={ctx}
            location="single"
            variant={'full'}
          />
          <button
            type="button"
            sx={{
              ...articleStyles.button.scrolldown,
            }}
            aria-label="Scroll to content"
            onClick={() => scrollTo('#content')}
          >
            <FiChevronsDown />
          </button>
        </Flex>
      </header>
      <div
        id="content"
        sx={{
          ...articleStyles.full.content,
        }}
      >
        <PostEntryContent ctx={ctx} content={post.content} location="single" />
        {post.tags.nodes.length > 0 && <Tags tags={post.tags.nodes} />}
        <PrevNextPostNavigation ctx={ctx} />
      </div>
      {!!addWordPressComments && post.commentStatus === 'open' && (
        <section sx={commentsSectionStyles}>
          <CommentsList post={post} />
        </section>
      )}
      {!!disqus && (
        <div
          sx={{
            p: (theme) => [
              `1.5rem`,
              '4rem',
              `4rem calc(50% - ${parseInt(theme.sizes.content) / 2}rem)`,
            ],
          }}
        >
          <DiscussionEmbed colormode={colorMode} {...disqusConfig} />
        </div>
      )}
    </article>
  )
}
