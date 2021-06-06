import React from 'react'
import Posts from 'gingerThemeComponents/templates/Posts'

export default ({ data, pageContext }) => {
  return <Posts posts={data.allWpPost} ctx={pageContext} />
}
