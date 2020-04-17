import React from 'react'
import Tag from '../../components/templates/Tag'

export default ({ data, pageContext }) => {
  return <Tag posts={data.allWpPost} tag={data.wpTag} ctx={pageContext} />
}
