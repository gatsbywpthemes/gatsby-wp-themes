import React from 'react'
import Tag from '../../components/templates/Tag'

export default ({ data, pageContext }) => {
  return <Tag tag={data.wp.tag} ctx={pageContext} />
}
