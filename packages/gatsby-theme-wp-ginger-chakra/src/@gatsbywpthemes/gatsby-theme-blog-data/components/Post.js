import React from 'react'
import Post from 'gingerThemeComponents/templates/Post'

const PostComponent = ({ data, pageContext }) => {
  return <Post post={data.wpPost} ctx={pageContext} />
}
export default PostComponent
