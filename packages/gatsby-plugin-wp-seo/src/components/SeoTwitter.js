import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { twitterUserName } from "./../helpers"
import slashes from "remove-trailing-slash"
import { SeoOptionsContext } from "./../context"

export const SeoTwitter = ({ pageDescription, title, media }) => {
  const { social, siteUrl, twitterSummaryCardImage } = useContext(
    SeoOptionsContext
  )
  const absoluteMedia = media ? `${slashes(siteUrl)}${media}` : null
  const twitterUser = twitterUserName(social)

  const twitterSummaryImage = twitterSummaryCardImage
    ? `${slashes(siteUrl)}/${twitterSummaryCardImage}`
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
