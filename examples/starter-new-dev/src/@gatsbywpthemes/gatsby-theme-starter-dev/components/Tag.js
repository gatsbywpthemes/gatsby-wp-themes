/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react"
import Tag from "starterComponents/templates/Tag"

export default ({ data, pageContext }) => {
  return (
    <Tag tag={{ ...data.wpTag, posts: data.allWpPost }} ctx={pageContext} />
  )
}
