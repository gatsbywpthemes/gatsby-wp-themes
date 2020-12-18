import React from 'react'
import { FacebookShareButton, FacebookIcon } from 'react-share'
import slashes from 'remove-trailing-slash'
import { useSiteMetaData } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { NoIconShare } from './index'

export const Facebook = ({
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
    <NoIconShare as={FacebookShareButton} url={shareUrl} quote={title}>
      {children}
    </NoIconShare>
  ) : (
    <FacebookIcon
      round={round}
      size={size}
      borderRadius={borderRadius}
      iconBgStyle={iconBgStyle}
      logoFillColor={logoFillColor}
    />
  )
}
