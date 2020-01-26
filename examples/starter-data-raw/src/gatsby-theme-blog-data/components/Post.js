import React from 'react'
import Post from '../../components/templates/Post'

export default ({ data }) => {
  return <Post post={data.wp.post} />
}
