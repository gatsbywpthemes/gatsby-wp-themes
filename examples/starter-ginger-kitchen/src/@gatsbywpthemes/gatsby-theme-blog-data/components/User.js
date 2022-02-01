import React from 'react'
import User from 'gingerThemeComponents/templates/User'

const UserComponent = ({ data, pageContext }) => {
  return (
    <User user={{ ...data.wpUser, posts: data.allWpPost }} ctx={pageContext} />
  )
}
export default UserComponent
