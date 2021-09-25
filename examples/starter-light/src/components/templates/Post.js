import React from "react"
import { Layout } from "../Layout"

const Post = ({ post, ctx }) => {
  const { title, uri, content, headlesswp } = post
  return (
    <Layout page={post} type="post">
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default Post
