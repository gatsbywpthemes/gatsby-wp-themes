import React from 'react'
import { TelegramShareButton, TelegramIcon } from 'react-share'
import slashes from 'remove-trailing-slash'
import { useSiteMetaData } from 'gatsby-theme-blog-data/src/hooks'
import { NoIconShare } from './index'

export const Telegram = ({
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
    <NoIconShare as={TelegramShareButton} url={shareUrl} title={title}>
      {children}
    </NoIconShare>
  ) : (
    <TelegramIcon
      round={round}
      size={size}
      borderRadius={borderRadius}
      iconBgStyle={iconBgStyle}
      logoFillColor={logoFillColor}
    />
  )
}
