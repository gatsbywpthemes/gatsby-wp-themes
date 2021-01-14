import React from 'react'
import Posts from '../../../components/templates/Posts'

export default ({ data, pageContext }) => {
  return <Posts posts={data?.allWpPost} ctx={pageContext} />
}
