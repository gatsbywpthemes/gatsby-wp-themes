import React from "react"
import Post from "baseComponents/templates/Post"

const PostComponent = ({ data, pageContext }) => {
  return <Post post={data.wpPost} ctx={pageContext} />
}
export default PostComponent
