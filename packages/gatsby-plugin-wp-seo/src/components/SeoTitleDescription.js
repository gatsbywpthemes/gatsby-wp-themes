import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { setPageTitle, setPageDescription } from "./../helpers/index"
import { SeoSiteSettingsContext } from "./../context"

export const SeoTitleDescription = (props) => {
  console.log("props", props)
  const ctx = useContext(SeoSiteSettingsContext)
  const { title, description, humanPageNumber = 1, titleTemplate } = props

  const pageTitle =
    props.seo?.title ||
    setPageTitle(
      title,
      ctx.title,
      ctx.description,
      humanPageNumber,
      titleTemplate
    )

  const pageDescription =
    props.seo?.metaDesc || setPageDescription(description, ctx.description)

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: ctx.language.replace("_", "-") || "en-US",
        }}
        title={pageTitle}
      >
        <meta name="description" content={pageDescription} />
      </Helmet>
    </>
  )
}
