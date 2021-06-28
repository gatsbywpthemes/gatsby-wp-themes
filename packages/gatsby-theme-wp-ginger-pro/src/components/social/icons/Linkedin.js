import React from 'react'
import { LinkedinShareButton, LinkedinIcon } from 'react-share'
import slashes from 'remove-trailing-slash'
import { useSiteMetaData } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { NoIconShare } from 'gingerThemeComponents'

export const Linkedin = ({
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
    <NoIconShare as={LinkedinShareButton} url={shareUrl}>
      {children}
    </NoIconShare>
  ) : (
    <LinkedinIcon
      round={round}
      size={size}
      borderRadius={borderRadius}
      iconBgStyle={iconBgStyle}
      logoFillColor={logoFillColor}
    />
  )
}
