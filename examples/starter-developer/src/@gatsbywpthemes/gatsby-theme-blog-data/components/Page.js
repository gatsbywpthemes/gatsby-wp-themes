import React from 'react'
import Page from 'starterComponents/templates/Page'

export default ({ data, pageContext }) => {
  return <Page page={data.wpPage} ctx={pageContext} />
}
