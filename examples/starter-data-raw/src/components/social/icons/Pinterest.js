import React from 'react'
import { PinterestShareButton, PinterestIcon } from 'react-share'
import slashes from 'remove-trailing-slash'
import useSiteMetaData from 'gatsby-theme-blog-data/src/hooks/useSiteMetadata'

const Pinterest = ({
  url,
  media,
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
  const shareMedia = `${slashes(metadata.url)}${media}`

  return (
    <PinterestShareButton url={shareUrl} media={shareMedia} description={title}>
      {children}
      {!children && (
        <PinterestIcon
          round={round}
          size={size}
          borderRadius={borderRadius}
          iconBgStyle={iconBgStyle}
          logoFillColor={logoFillColor}
        />
      )}
    </PinterestShareButton>
  )
}

export default Pinterest
