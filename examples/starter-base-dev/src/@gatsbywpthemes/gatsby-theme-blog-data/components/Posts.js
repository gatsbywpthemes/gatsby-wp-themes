import React from "react"
import Posts from "baseComponents/templates/Posts"

const Blog = ({ data, pageContext }) => {
  return <Posts posts={data?.allWpPost} ctx={pageContext} />
}

export default Blog
