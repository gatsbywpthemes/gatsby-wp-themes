import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from 'gatsby-theme-blog-data/src/hooks/useSiteMetadata'
import useSiteSettings from 'gatsby-theme-blog-data/src/hooks/useSiteSettings'
import useSiteOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import setPageDescription from './pageDescription'
import setPageTitle from './pageTitle'
import twitterUserName from './twitterUserName'
import slashes from 'remove-trailing-slash'
import normalize from 'normalize-path'

const SEO = ({
  title,
  description = '',
  pageNumber = 1,
  ogType = 'object',
  titleTemplate = 'default',
  media = null,
  ogUrl = '',
}) => {
  const { social, siteUrl } = useSiteMetadata()
  const siteSettings = useSiteSettings()
  const siteOptions = useSiteOptions()
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

  const twitterUser = twitterUserName(social)

  const twitterSummaryImage = siteOptions.twitterSummaryCardImage
    ? `${slashes(siteUrl)}/${siteOptions.twitterSummaryCardImage}`
    : false

  return (
    <Helmet htmlAttributes={{ lang: siteSettings.language }} title={pageTitle}>
      <meta name="description" content={pageDescription} />

      {/* titter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={pageDescription} />
      {!!absoluteMedia ? (
        <meta name="twitter:card" content="summary_large_image" />
      ) : (
        <meta name="twitter:card" content="summary" />
      )}
      {!!absoluteMedia ? (
        <meta name="twitter:image" content={absoluteMedia} />
      ) : (
        !!twitterSummaryImage && (
          <meta name="twitter:image" content={twitterSummaryImage} />
        )
      )}
      {!!twitterUser && <meta name="twitter:site" content={twitterUser} />}
      {!!twitterUser && <meta name="twitter:creator" content={twitterUser} />}

      {/* opengraph */}
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

export default SEO
