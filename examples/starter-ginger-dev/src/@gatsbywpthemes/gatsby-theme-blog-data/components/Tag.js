import React from 'react'
import Tag from 'gingerThemeComponents/templates/Tag'

export default ({ data, pageContext }) => {
  return (
    <Tag tag={{ ...data.wpTag, posts: data.allWpPost }} ctx={pageContext} />
  )
}
