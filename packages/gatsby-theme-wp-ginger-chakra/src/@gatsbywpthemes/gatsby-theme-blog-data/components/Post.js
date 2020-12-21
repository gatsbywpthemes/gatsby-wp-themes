import React from 'react'
import Post from 'gingerThemeComponents/templates/Post'

export default ({ data, pageContext }) => {
  return <Post post={data.wpPost} ctx={pageContext} />
}
