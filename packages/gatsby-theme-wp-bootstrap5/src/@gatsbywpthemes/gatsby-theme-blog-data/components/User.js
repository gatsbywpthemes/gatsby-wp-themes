import React from 'react'
import User from '../../../components/templates/User'

export default ({ data, pageContext }) => {
  return (
    <User user={{ ...data.wpUser, posts: data.allWpPost }} ctx={pageContext} />
  )
}
