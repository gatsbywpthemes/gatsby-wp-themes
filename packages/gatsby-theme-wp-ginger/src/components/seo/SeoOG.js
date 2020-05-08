import React from 'react'
import { Helmet } from 'react-helmet'

import {
  useSiteSettings,
  useSiteMetaData,
} from 'gatsby-theme-blog-data/src/hooks'
import setPageDescription from './pageDescription'
import setPageTitle from './pageTitle'
import slashes from 'remove-trailing-slash'
import normalize from 'normalize-path'

const SEOOpenGraph = ({
  title,
  description = '',
  pageNumber = 1,
  ogType = 'object',
  titleTemplate = 'default',
  media = null,
  ogUrl = '',
}) => {
  const { siteUrl } = useSiteMetaData()
  const siteSettings = useSiteSettings()
  const site = {
    title: siteSettings.title,
    description: siteSettings.description,
  }
  const normalizedOgUrl = normalize(`/${ogUrl}`)
  const absoluteOgUrl = `${slashes(siteUrl)}${normalizedOgUrl}`

  const pageTitle = setPageTitle(
    title,
    site.title,
    site.description,
    pageNumber,
    titleTemplate
  )

  const pageDescription = setPageDescription(description, site.description)
  const absoluteMedia = media ? `${slashes(siteUrl)}${media}` : null

  return (
    <Helmet>
      <meta
        property="og:locale"
        content={siteSettings.language.replace('-', '_')}
      />
      <meta property="og:site_name" content={site.title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={absoluteOgUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      {!!absoluteMedia && <meta property="og:image" content={absoluteMedia} />}
    </Helmet>
  )
}

export default SEOOpenGraph
