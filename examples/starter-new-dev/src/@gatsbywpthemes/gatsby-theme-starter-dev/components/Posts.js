/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react"
import Posts from "starterComponents/templates/Posts"

export default ({ data, pageContext }) => {
  return <Posts posts={data?.allWpPost} ctx={pageContext} />
}