import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import slashes from "remove-trailing-slash"
import { SeoSiteSettingsContext } from "./../context"
import { SeoOptionsContext } from "./../context"
import { addPageNumber } from "./helpers"
import { absolutePath } from "./helpers"

export const SeoOg = (props) => {
  const { seo, uri, humanPageNumber, numberOfPages, featuredImage } = props
  const { language, title } = useContext(SeoSiteSettingsContext)
  const { siteUrl } = useContext(SeoOptionsContext)
  const absoluteOgUrl = absolutePath(siteUrl, uri)
  const ogType = slashes(props.uri) === "" ? "website" : seo?.page.opengraphType
  const ogTitle = addPageNumber(
    seo.page.opengraphTitle || seo.page.title,
    humanPageNumber,
    numberOfPages
  )
  const ogImage =
    seo.page.opengraphImage?.localFile?.childImageSharp.original ||
    featuredImage ||
    seo.general.openGraph.defaultImage?.localFile?.childImageSharp.original
  return (
    <Helmet>
      <meta property="og:locale" content={language} />
      <meta property="og:site_name" content={title} />
      {ogType && <meta property="og:type" content={ogType} />}
      {uri && <meta property="og:url" content={absoluteOgUrl} />}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogImage.src && (
        <meta
          property="og:image"
          content={absolutePath(siteUrl, ogImage.src)}
        />
      )}
      {ogImage.width && (
        <meta property="og:image:width" content={ogImage.width} />
      )}
      {ogImage.height && (
        <meta property="og:image:height" content={ogImage.height} />
      )}

      {seo.page.opengraphDescription && (
        <meta
          property="og:description"
          content={seo.page.opengraphDescription}
        />
      )}
    </Helmet>
  )
}
