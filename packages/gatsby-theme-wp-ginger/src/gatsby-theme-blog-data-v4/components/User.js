import React from 'react'
import User from '../../components/templates/User'

export default ({ data, pageContext }) => {
  return <User user={data.wp.user} ctx={pageContext} />
}
