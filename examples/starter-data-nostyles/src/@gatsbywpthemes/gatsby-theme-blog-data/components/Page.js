import React from 'react'
import Page from '../../../components/templates/Page'

export default ({ data, pageContext }) => {
  return <Page page={data.wpPage} ctx={pageContext} />
}
