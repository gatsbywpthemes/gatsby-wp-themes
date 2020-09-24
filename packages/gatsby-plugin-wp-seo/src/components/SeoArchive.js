import React from "react"
import { Seo } from "./Seo"
import { SeoSiteSettingsContextProvider } from "./../context"

export const SeoArchive = (props) => {
  const { title, uri, ...rest } = props
  return (
    <SeoSiteSettingsContextProvider>
      <Seo title={title} ogUrl={uri} ogType="object" {...rest} />
    </SeoSiteSettingsContextProvider>
  )
}
