import React from 'react'
import { Helmet } from 'react-helmet'
import {
  useSiteSettings,
  useSiteMetaData,
} from 'gatsby-theme-blog-data/src/hooks'
import slashes from 'remove-trailing-slash'
import normalize from 'normalize-path'

export const SeoOg = ({ pageTitle, pageDescription, ogType, media, ogUrl }) => {
  const { siteUrl } = useSiteMetaData()
  const siteSettings = useSiteSettings()

  const normalizedOgUrl = normalize(`/${ogUrl}`)
  const absoluteOgUrl = `${slashes(siteUrl)}${normalizedOgUrl}`

  const absoluteMedia = media ? `${slashes(siteUrl)}${media}` : null

  return (
    <Helmet>
      <meta
        property="og:locale"
        content={siteSettings.language.replace('-', '_')}
      />
      <meta property="og:site_name" content={siteSettings.title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={absoluteOgUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      {!!absoluteMedia && <meta property="og:image" content={absoluteMedia} />}
    </Helmet>
  )
}
