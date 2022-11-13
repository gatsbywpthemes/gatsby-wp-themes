import React, { useContext } from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import slashes from "remove-trailing-slash"
import { SeoSiteSettingsContext } from "./../context"
import { addPageNumber, absolutePath } from "./../helpers"

export const SeoOg = (props) => {
  const { seo, uri, humanPageNumber, numberOfPages, featuredImage } = props
  const { language, title, siteUrl } = useContext(SeoSiteSettingsContext)
  const isFrontPage = slashes(props.uri) === ""
  const ogType = isFrontPage ? "website" : seo.page?.opengraphType
  const ogTitle = addPageNumber(
    seo.page?.opengraphTitle ||
      seo.page?.title ||
      (isFrontPage && seo?.general?.openGraph?.frontPage?.title),
    humanPageNumber,
    numberOfPages
  )
  const ogImage =
    seo.page?.opengraphImage?.localFile?.childImageSharp?.original ||
    featuredImage ||
    (isFrontPage &&
      seo?.general?.openGraph?.frontPage?.image?.localFile?.childImageSharp
        .original) ||
    seo?.general?.openGraph?.defaultImage?.localFile?.childImageSharp?.original

  const ogDescription =
    seo.page?.opengraphDescription ||
    (isFrontPage && seo?.general?.openGraph?.frontPage?.description)

  return (
    <Helmet>
      <meta property="og:locale" content={language} />
      <meta property="og:site_name" content={title} />
      {ogType && <meta property="og:type" content={ogType} />}
      {uri && siteUrl && (
        <meta
          property="og:url"
          content={absolutePath(siteUrl, withPrefix(uri))}
        />
      )}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {siteUrl && ogImage?.src && (
        <meta
          property="og:image"
          content={absolutePath(siteUrl, ogImage.src)}
        />
      )}
      {ogImage?.width && (
        <meta property="og:image:width" content={ogImage.width} />
      )}
      {ogImage?.height && (
        <meta property="og:image:height" content={ogImage.height} />
      )}
    </Helmet>
  )
}
