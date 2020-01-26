import React from 'react'
import { RedditShareButton, RedditIcon } from 'react-share'
import slashes from 'remove-trailing-slash'
import useSiteMetaData from 'gatsby-theme-blog-data/src/hooks/useSiteMetadata'

const Reddit = ({
  url,
  title,
  children,
  round = true,
  size = 32,
  borderRadius = 0,
  iconBgStyle = {},
  logoFillColor = 'white',
}) => {
  const metadata = useSiteMetaData()
  const shareUrl = `${slashes(metadata.url)}${url}`
  return (
    <RedditShareButton url={shareUrl} title={title}>
      {children}
      {!children && (
        <RedditIcon
          round={round}
          size={size}
          borderRadius={borderRadius}
          iconBgStyle={iconBgStyle}
          logoFillColor={logoFillColor}
        />
      )}
    </RedditShareButton>
  )
}

export default Reddit
