import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteSettings } from 'gatsby-theme-blog-data/src/hooks'

import {
  setPageTitle,
  setPageDescription,
  SEOTwitter,
  SEOOG,
  CustomHeadElements,
} from './index'

export const SEO = props => {
  const { title, description, pageNumber, titleTemplate } = props

  const siteSettings = useSiteSettings()

  const pageTitle = setPageTitle(
    title,
    siteSettings.title,
    siteSettings.description,
    pageNumber,
    titleTemplate
  )

  const pageDescription = setPageDescription(
    description,
    siteSettings.description
  )

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: siteSettings.language }}
        title={pageTitle}
      >
        <meta name="description" content={pageDescription} />
      </Helmet>
      <SEOTwitter
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        {...props}
      />
      <SEOOG
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

SEO.defaultProps = {
  media: null,
  description: '',
  pageNumber: 1,
  titleTemplate: 'default',
}
