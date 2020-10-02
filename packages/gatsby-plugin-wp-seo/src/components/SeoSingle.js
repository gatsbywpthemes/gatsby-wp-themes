import React from "react"
import { Seo } from "./Seo"
import { SeoSiteSettingsContextProvider } from "./../context"

export const SeoSingle = (props) => {
  return (
    <SeoSiteSettingsContextProvider>
      <Seo {...props} />
    </SeoSiteSettingsContextProvider>
  )
}
