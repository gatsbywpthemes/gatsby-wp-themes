import React from 'react'
import Posts from '../../components/templates/Posts'

export default ({ data, pageContext }) => {
  console.log(data)
  return <Posts posts={data.allWpPost} ctx={pageContext} />
}
