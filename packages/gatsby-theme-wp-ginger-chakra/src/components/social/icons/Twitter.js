import React from 'react'
import { TwitterShareButton, TwitterIcon } from 'react-share'
import slashes from 'remove-trailing-slash'
import { useSiteMetaData } from 'gatsby-theme-blog-data/src/hooks'
import { NoIconShare } from './index'

export const Twitter = ({
  url,
  title,
  children,
  round = true,
  size = 32,
  borderRadius = 0,
  iconBgStyle = {},
  logoFillColor = 'white',
}) => {
  const { siteUrl } = useSiteMetaData()
  const shareUrl = `${slashes(siteUrl)}${url}`
  return children ? (
    <NoIconShare as={TwitterShareButton} url={shareUrl} title={title}>
      {children}
    </NoIconShare>
  ) : (
    <TwitterIcon
      round={round}
      size={size}
      borderRadius={borderRadius}
      iconBgStyle={iconBgStyle}
      logoFillColor={logoFillColor}
    />
  )
}
