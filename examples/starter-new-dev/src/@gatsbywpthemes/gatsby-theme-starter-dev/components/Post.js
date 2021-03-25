/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react"
import Post from "starterComponents/templates/Post"

export default ({ data, pageContext }) => {
  return <Post post={data.wpPost} ctx={pageContext} />
}