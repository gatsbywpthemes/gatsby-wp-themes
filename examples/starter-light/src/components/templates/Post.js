import React from "react"
import { Layout } from "../Layout"
import { PostEntry } from "../post"

const Post = ({ post, ctx }) => {
  return (
    <Layout page={post} type="post">
      <PostEntry location="single" post={post} />
    </Layout>
  )
}

export default Post
