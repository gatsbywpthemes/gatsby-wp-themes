import React from 'react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { WordPressComments, DisqusComments } from 'bootstrap5ThemeComponents'

export const Comments = ({ post }) => {
  const { addWordPressComments, disqus } = useThemeOptions()
  return (
    <>
      {!!addWordPressComments && post.commentStatus === 'open' && (
        <WordPressComments post={post} />
      )}
      {!!disqus && (
        <div className="border-top border-dark pt-4">
          <DisqusComments disqus={disqus} post={post} />
        </div>
      )}
    </>
  )
}
