import React from 'react'
import { Helmet } from 'react-helmet'
import {
  useThemeOptions,
  useSiteMetaData,
} from 'gatsby-theme-blog-data/src/hooks'
import { twitterUserName } from './index'
import slashes from 'remove-trailing-slash'

export const SeoTwitter = ({ pageDescription, title, media }) => {
  const { social, siteUrl } = useSiteMetaData()
  const siteOptions = useThemeOptions()
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
