import React from 'react'
import Tag from 'gingerThemeComponents/templates/Tag'

const TagComponent = ({ data, pageContext }) => {
  return (
    <Tag tag={{ ...data.wpTag, posts: data.allWpPost }} ctx={pageContext} />
  )
}
export default TagComponent
