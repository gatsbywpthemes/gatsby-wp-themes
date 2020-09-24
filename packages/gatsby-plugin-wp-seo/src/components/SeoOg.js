import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import slashes from "remove-trailing-slash"
import normalize from "normalize-path"
import { SeoSiteSettingsContext } from "./../context"
import { SeoOptionsContext } from "./../context"

export const SeoOg = ({ pageTitle, pageDescription, ogType, media, ogUrl }) => {
  const { language, title } = useContext(SeoSiteSettingsContext)
  const { siteUrl } = useContext(SeoOptionsContext)
  const normalizedOgUrl = normalize(`/${ogUrl}`)
  const absoluteOgUrl = `${slashes(siteUrl)}${normalizedOgUrl}`

  const absoluteMedia = media ? `${slashes(siteUrl)}${media}` : null

  return (
    <Helmet>
      <meta property="og:locale" content={language} />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={absoluteOgUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      {!!absoluteMedia && <meta property="og:image" content={absoluteMedia} />}
    </Helmet>
  )
}
