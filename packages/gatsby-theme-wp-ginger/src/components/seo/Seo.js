import React from 'react'
import { Helmet } from 'react-helmet'
import {
  useThemeOptions,
  useSiteSettings,
  useSiteMetaData,
} from 'gatsby-theme-blog-data/src/hooks'
import SEOTwitter from './SeoTwitter'
import SEOOG from './SeoOG'
import CustomHeadElements from './CustomHeadElements'
import setPageDescription from './pageDescription'
import setPageTitle from './pageTitle'
import slashes from 'remove-trailing-slash'

const SEO = ({
  title,
  description = '',
  pageNumber = 1,
  titleTemplate = 'default',
  ogUrl = '',
}) => {
  const { siteUrl } = useSiteMetaData()
  const siteSettings = useSiteSettings()
  const siteOptions = useThemeOptions()
  const site = {
    title: siteSettings.title,
    description: siteSettings.description,
  }

  const pageTitle = setPageTitle(
    title,
    site.title,
    site.description,
    pageNumber,
    titleTemplate
  )

  const pageDescription = setPageDescription(description, site.description)
    ? `${slashes(siteUrl)}/${siteOptions.twitterSummaryCardImage}`
    : false

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: siteSettings.language }}
        title={pageTitle}
      >
        <meta name="description" content={pageDescription} />
      </Helmet>
      <SEOTwitter />
      <SEOOG />
      <CustomHeadElements />
    </>
  )
}

export default SEO
