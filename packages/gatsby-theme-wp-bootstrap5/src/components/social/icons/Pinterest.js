import React from 'react'
import { PinterestShareButton, PinterestIcon } from 'react-share'
import slashes from 'remove-trailing-slash'
import { useSiteMetaData } from 'gatsby-theme-blog-data/src/hooks'

export const Pinterest = ({
  url,
  media,
  title,
  children,
  round = false,
  size = 32,
  borderRadius = 0,
  bgStyle = { fill: '#303030' },
  iconFillColor = 'white',
}) => {
  const { siteUrl } = useSiteMetaData()
  const shareUrl = `${slashes(siteUrl)}${url}`
  const shareMedia = `${slashes(siteUrl)}${media}`

  return (
    <PinterestShareButton url={shareUrl} media={shareMedia} description={title}>
      {children}
      {!children && (
        <PinterestIcon
          round={round}
          size={size}
          borderRadius={borderRadius}
          bgStyle={bgStyle}
          iconFillColor={iconFillColor}
        />
      )}
    </PinterestShareButton>
  )
}
