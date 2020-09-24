import React from "react"
import { Seo } from "./Seo"
import { SeoSiteSettingsContextProvider } from "./../context"

export const SeoSingle = (props) => {
  const { page, ...rest } = props

  const seoProps = {
    title: page.title,
    description: page.excerpt,
    media: page.featuredImage
      ? page.featuredImage.node.localFile.childImageSharp.fluid.src
      : null,
    ogUrl: page.uri,
    ogType: page.isFrontPage ? "website" : "article",
  }
  return (
    <SeoSiteSettingsContextProvider>
      <Seo {...seoProps} {...rest} />
    </SeoSiteSettingsContextProvider>
  )
}
