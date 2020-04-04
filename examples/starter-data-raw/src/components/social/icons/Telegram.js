import React from 'react'
import { TelegramShareButton, TelegramIcon } from 'react-share'
import slashes from 'remove-trailing-slash'
import useSiteMetaData from 'gatsby-theme-blog-data/src/hooks/useSiteMetadata'

const Telegram = ({
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
    <TelegramShareButton url={shareUrl} title={title}>
      {children}
      {!children && (
        <TelegramIcon
          round={round}
          size={size}
          borderRadius={borderRadius}
          iconBgStyle={iconBgStyle}
          logoFillColor={logoFillColor}
        />
      )}
    </TelegramShareButton>
  )
}

export default Telegram