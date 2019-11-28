import React from 'react'
import Category from '../../components/templates/Category'

export default ({ data, pageContext }) => {
  return <Category category={data.wp.category} ctx={pageContext} />
}
