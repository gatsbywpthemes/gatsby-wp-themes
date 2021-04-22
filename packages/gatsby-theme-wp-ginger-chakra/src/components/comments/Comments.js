import React from 'react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { WordPressComments } from 'gingerThemeComponents'

export const Comments = ({ post }) => {
  const { addWordPressComments } = useThemeOptions()
  return (
    !!addWordPressComments &&
    post.commentStatus === 'open' && <WordPressComments post={post} />
  )
}
