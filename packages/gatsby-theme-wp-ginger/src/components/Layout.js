/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, jsx, useThemeUI, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import useSiteSettings from 'gatsby-theme-blog-data/src/hooks/useSiteSettings'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import { Global } from '@emotion/core'
import { globalStyles } from '../styles/GlobalStyles'
import Footer from './footer/Footer'
import '../styles/blocks.css'
import '../styles/custom-gutenstyles.css'
import ColorSwitch from './ColorSwitch'

const MaybeWithContainer = ({ useContainer, children }) => {
  return !useContainer ? (
    children
  ) : (
    <div sx={{ variant: 'container' }}>{children}</div>
  )
}

const Layout = ({ useContainer = true, children }) => {
  const [colorMode] = useColorMode()
  const siteSettings = useSiteSettings()
  const { theme } = useThemeUI()
  const { addColorModes } = useThemeOptions()

  return (
    <>
      <Global styles={globalStyles(theme)} />
      <Box
        sx={{ variant: 'layout' }}
        className={
          colorMode === 'default' ? 'default-color-mode' : 'dark-color-mode'
        }
      >
        <header sx={{ variant: 'header' }}>
          <Link to="/">{siteSettings.title}</Link>
          {!!addColorModes && <ColorSwitch />}
        </header>
        <main sx={{ variant: 'main' }}>
          {/* <SlideSidebar /> */}
          <MaybeWithContainer useContainer={useContainer}>
            {children}
          </MaybeWithContainer>
        </main>
        <Footer />
      </Box>
    </>
  )
}

export default Layout
