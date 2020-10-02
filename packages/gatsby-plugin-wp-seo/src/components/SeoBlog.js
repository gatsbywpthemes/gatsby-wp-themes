import React from "react"
import { Seo } from "./Seo"
import { SeoSiteSettingsContextProvider } from "./../context"

export const SeoBlog = (props) => {
  return (
    <SeoSiteSettingsContextProvider>
      <Seo {...props} />
    </SeoSiteSettingsContextProvider>
  )
}
