import React from 'react'
import User from '../../components/templates/User'

export default ({ data, pageContext }) => {
  console.log(data)
  console.log({ ...data.wpUser, posts: data.allWpPost })
  return (
    <User user={{ ...data.wpUser, posts: data.allWpPost }} ctx={pageContext} />
  )
}
