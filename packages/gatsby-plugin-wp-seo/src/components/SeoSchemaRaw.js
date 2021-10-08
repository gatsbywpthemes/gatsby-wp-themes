import React from "react"
import { Helmet } from "react-helmet"

export const SeoSchemaRaw = (props) => {
  return (
    <Helmet>
      {props.seo?.page?.schema?.raw && (
        <script type="application/ld+json">{props.seo.page.schema.raw}</script>
      )}
    </Helmet>
  )
}
