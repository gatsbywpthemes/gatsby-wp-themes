import React from "react"
import User from "baseComponents/templates/User"

const UserComponent = ({ data, pageContext }) => {
  return (
    <User user={{ ...data.wpUser, posts: data.allWpPost }} ctx={pageContext} />
  )
}

export default UserComponent
