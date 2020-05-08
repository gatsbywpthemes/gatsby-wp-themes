import React from 'react'
import { Helmet } from 'react-helmet'
import {
  useThemeOptions,
  useSiteSettings,
  useSiteMetaData,
} from 'gatsby-theme-blog-data/src/hooks'
import setPageDescription from './pageDescription'
import twitterUserName from './twitterUserName'
import slashes from 'remove-trailing-slash'

const SEOTwitter = ({ title, description = '', media = null }) => {
  const { social, siteUrl } = useSiteMetaData()
  const siteSettings = useSiteSettings()
  const siteOptions = useThemeOptions()
  const site = {
    title: siteSettings.title,
    description: siteSettings.description,
  }

  const pageDescription = setPageDescription(description, site.description)
  const absoluteMedia = media ? `${slashes(siteUrl)}${media}` : null

  const twitterUser = twitterUserName(social)

  const twitterSummaryImage = siteOptions.twitterSummaryCardImage
    ? `${slashes(siteUrl)}/${siteOptions.twitterSummaryCardImage}`
    : false

  return (
    <Helmet>
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
    </Helmet>
  )
}

export default SEOTwitter
