import React from 'react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { WordPressComments, DisqusComments } from 'starterComponents'

export const Comments = ({ post }) => {
  const { addWordPressComments, disqus } = useThemeOptions()

  return (
    <>
      {!!addWordPressComments && post.commentStatus === 'open' && (
        <WordPressComments post={post} />
      )}
      {!!disqus && <DisqusComments disqus={disqus} post={post} />}
    </>
  )
}
