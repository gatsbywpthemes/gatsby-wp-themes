/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react"
import User from "starterComponents/templates/User"

export default ({ data, pageContext }) => {
  return (
    <User user={{ ...data.wpUser, posts: data.allWpPost }} ctx={pageContext} />
  )
}