import React from 'react'
import Category from 'gingerThemeComponents/templates/Category'

const CategoryComponent = ({ data, pageContext }) => {
  return (
    <Category
      category={{ ...data.wpCategory, posts: data.allWpPost }}
      ctx={pageContext}
    />
  )
}

export default CategoryComponent
