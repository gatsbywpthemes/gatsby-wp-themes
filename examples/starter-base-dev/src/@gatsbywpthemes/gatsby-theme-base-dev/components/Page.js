/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react"
import Page from "baseComponents/templates/Page"

export default ({ data, pageContext }) => {
  return <Page page={data.wpPage} ctx={pageContext} />
}