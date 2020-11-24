import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

export const Comments = () => {
  // in order to reload disqus and apply correct text color when color mode changes

  /*
  
   const { addWordPressComments, disqus } = useThemeOptions()
  const disqusConfig = {
    shortname: disqus,
    config: {
      identifier: post.slug,
      title: post.title,
    },
  }
  
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
      */
  return null
}
