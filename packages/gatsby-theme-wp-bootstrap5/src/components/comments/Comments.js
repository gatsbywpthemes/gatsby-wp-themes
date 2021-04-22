import React from 'react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { WordPressComments } from 'bootstrap5ThemeComponents'

export const Comments = ({ post }) => {
  const { addWordPressComments } = useThemeOptions()
  return (
    addWordPressComments &&
    post.commentStatus === 'open' && <WordPressComments post={post} />
  )
}
