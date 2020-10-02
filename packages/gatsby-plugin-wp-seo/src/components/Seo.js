import React from "react"
import {
  SeoTitleDescription,
  SeoTwitter,
  SeoOg,
  CustomHeadElements,
} from "./index"

export const Seo = (props) => {
  return (
    <>
      <SeoTitleDescription {...props} />
      {props.seo && <SeoTwitter {...props} />}
      {props.seo && <SeoOg {...props} />}
      <CustomHeadElements {...props} />
    </>
  )
}

Seo.defaultProps = {
  media: null,
  description: "",
  pageNumber: 1,
  titleTemplate: "default",
}
