import React from "react"
import Page from "baseComponents/templates/Page"

const PageComponent = ({ data, pageContext }) => {
  return <Page page={data.wpPage} ctx={pageContext} />
}
export default PageComponent
