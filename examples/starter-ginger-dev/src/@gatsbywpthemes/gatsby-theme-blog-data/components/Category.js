import React from 'react'
import Category from 'gingerThemeComponents/templates/Category'

export default ({ data, pageContext }) => {
  return (
    <Category
      category={{ ...data.wpCategory, posts: data.allWpPost }}
      ctx={pageContext}
    />
  )
}
