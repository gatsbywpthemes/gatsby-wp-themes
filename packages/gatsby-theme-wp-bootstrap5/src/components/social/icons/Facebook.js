import React from 'react'
import { FacebookShareButton, FacebookIcon } from 'react-share'
import slashes from 'remove-trailing-slash'
import { useSiteMetaData } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const Facebook = ({
  url,
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
  return (
    <FacebookShareButton url={shareUrl} quote={title}>
      {children}
      {!children && (
        <FacebookIcon
          round={round}
          size={size}
          borderRadius={borderRadius}
          bgStyle={bgStyle}
          iconFillColor={iconFillColor}
        />
      )}
    </FacebookShareButton>
  )
}
