import React from 'react'
import { TwitterShareButton, TwitterIcon } from 'react-share'
import slashes from 'remove-trailing-slash'
import { useSiteMetaData } from 'gatsby-theme-blog-data/src/hooks'

export const Twitter = ({
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
    <TwitterShareButton url={shareUrl} title={title}>
      {children}
      {!children && (
        <TwitterIcon
          round={round}
          size={size}
          borderRadius={borderRadius}
          bgStyle={bgStyle}
          iconFillColor={iconFillColor}
        />
      )}
    </TwitterShareButton>
  )
}
