import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { SeoTwitter, SeoOg, CustomHeadElements } from "./index"
import { setPageTitle, setPageDescription } from "./../helpers/index"
import { SeoSiteSettingsContext } from "./../context"

export const Seo = (props) => {
  const ctx = useContext(SeoSiteSettingsContext)
  const { title, description, pageNumber = 1, titleTemplate } = props

  const pageTitle = setPageTitle(
    title,
    ctx.title,
    ctx.description,
    pageNumber,
    titleTemplate
  )

  const pageDescription = setPageDescription(description, ctx.description)

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
      <SeoTwitter
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        {...props}
      />
      <SeoOg
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        {...props}
      />
      <CustomHeadElements
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        {...props}
      />
    </>
  )
}

Seo.defaultProps = {
  media: null,
  description: "",
  pageNumber: 1,
  titleTemplate: "default",
}
