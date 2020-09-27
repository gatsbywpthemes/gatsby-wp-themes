import React from "react"
import { Seo } from "./Seo"
import { SeoSiteSettingsContextProvider } from "./../context"

export const SeoSingle = (props) => {
  const { page, ...rest } = props

  console.log(page)

  const seoProps = {
    title: page.seo?.title || page.title,
    description: page.seo?.metaDesc || page.excerpt,
    media: page.featuredImage
      ? page.featuredImage.node.localFile.childImageSharp.fluid.src
      : null,
    ogUrl: page.uri,
    ogType: page.isFrontPage ? "website" : page.seo?.ogType || "article",
    seo: page.seo,
  }
  return (
    <SeoSiteSettingsContextProvider>
      <Seo {...seoProps} {...rest} />
    </SeoSiteSettingsContextProvider>
  )
}
