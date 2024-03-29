import React from "react"
import {
  SeoTitleDescription,
  SeoTwitter,
  SeoOg,
  CustomHeadElements,
  SeoSchemaRaw,
} from "./index"
import { SeoSiteSettingsContextProvider } from "./../context"

export const Seo = (props) => {
  return (
    <SeoSiteSettingsContextProvider>
      <SeoTitleDescription {...props} />
      {props.yoastSeo && <SeoTwitter {...props} />}
      {props.yoastSeo && <SeoOg {...props} />}
      <SeoSchemaRaw {...props} />
      <CustomHeadElements {...props} />
    </SeoSiteSettingsContextProvider>
  )
}

Seo.defaultProps = {
  media: null,
  description: "",
  pageNumber: 1,
  titleTemplate: "default",
}
