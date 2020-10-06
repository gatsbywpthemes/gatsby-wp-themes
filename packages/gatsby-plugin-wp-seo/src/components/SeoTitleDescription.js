import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { SeoSiteSettingsContext } from "./../context"
import { addPageNumber } from "./../helpers"

export const SeoTitleDescription = (props) => {
  const { title, seo, humanPageNumber, numberOfPages } = props
  const ctx = useContext(SeoSiteSettingsContext)

  let pageTitle = addPageNumber(
    seo?.page?.title || title || `${ctx.title} | ${ctx.description}`,
    humanPageNumber,
    numberOfPages
  )

  const pageDescription = seo?.page?.metaDesc

  return (
    <Helmet
      htmlAttributes={{
        lang: ctx?.language.replace("_", "-") || "en-US",
      }}
      title={pageTitle}
    >
      {pageDescription && <meta name="description" content={pageDescription} />}
    </Helmet>
  )
}
