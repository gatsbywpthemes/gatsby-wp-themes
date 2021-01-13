import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { SeoOptionsContext } from "./../context"
import { absolutePath } from "./../helpers"

export const SeoTwitter = ({ seo }) => {
  const { siteUrl } = useContext(SeoOptionsContext)
  return (
    <Helmet>
      {seo.page?.twitterTitle && (
        <meta name="twitter:title" content={seo.page.twitterTitle} />
      )}
      {seo.page?.twitterDescription && (
        <meta
          name="twitter:description"
          content={seo.page?.twitterDescription}
        />
      )}
      {seo.general.social.twitter?.username && (
        <meta
          name="twitter:creator"
          content={`@${seo.general?.social.twitter.username}`}
        />
      )}
      {seo.general.social.twitter?.username && (
        <meta
          name="twitter:site"
          content={`@${seo.general?.social.twitter.username}`}
        />
      )}
      <meta name="twitter:card" content={seo.general.social.twitter.cardType} />

      {seo.page?.twitterImage?.localFile?.childImageSharp && (
        <meta
          name="twitter:image"
          content={absolutePath(
            siteUrl,
            seo.page.twitterImage.localFile.childImageSharp.original.src
          )}
        />
      )}
    </Helmet>
  )
}
