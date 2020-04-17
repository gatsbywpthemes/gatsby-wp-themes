import React from 'react'
import Post from '../../components/templates/Post'

export default ({ data, pageContext }) => {
  return <Post post={data.wp.post} ctx={pageContext} />
}
