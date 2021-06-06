import React from 'react'
import Page from 'gingerThemeComponents/templates/Page'

export default ({ data, pageContext }) => {
  return <Page page={data.wpPage} ctx={pageContext} />
}
