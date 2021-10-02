import React from "react"
import { Layout } from "../Layout"
import { PostEntry } from "../post"

const Post = ({ post, ctx }) => {
  return (
    <Layout page={post} type="post">
      <div className="center-container">
        <PostEntry location="single" post={post} />
      </div>
    </Layout>
  )
}

export default Post
