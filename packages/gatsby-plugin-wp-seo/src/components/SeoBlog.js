import React from "react"
import { Seo } from "./Seo"
import { SeoSiteSettingsContextProvider } from "./../context"
import slashes from "remove-trailing-slash"

export const SeoBlog = (props) => {
  const { uri, ...rest } = props
  const ogType = slashes(uri) === "" ? "website" : "object"
  return (
    <SeoSiteSettingsContextProvider>
      <Seo
        titleTemplate="with-description"
        ogUrl={uri}
        ogType={ogType}
        {...rest}
      />
    </SeoSiteSettingsContextProvider>
  )
}
