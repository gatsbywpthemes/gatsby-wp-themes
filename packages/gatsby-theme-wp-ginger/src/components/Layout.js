/** @jsx jsx */
import { useEffect } from 'react'
import {
  Layout as ThemeLayout,
  Main,
  Header,
  Container,
  jsx,
  useThemeUI,
  Styled,
  useColorMode,
} from 'theme-ui'
import { Link, navigate } from 'gatsby'
import useSiteSettings from 'gatsby-theme-blog-data/src/hooks/useSiteSettings'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import { Global } from '@emotion/core'
import { globalStyles } from '../styles/GlobalStyles'
import { Grommet } from 'grommet'
import Footer from './footer/Footer'
import SlideSidebar from './SlideSidebar'
import '../styles/blocks.css'
import '../styles/custom-gutenstyles.css'
import ColorSwitch from './ColorSwitch'

const MaybeWithContainer = ({ useContainer, children }) => {
  return !useContainer ? children : <Container>{children}</Container>
}

const Layout = ({ useContainer = true, children, isFrontPage }) => {
  const [colorMode] = useColorMode()
  const siteSettings = useSiteSettings()
  const { theme } = useThemeUI()
  const { addColorModes } = useThemeOptions()
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  const urlLastChar = url => url[url.length - 1]
  const relativeUrl = currentUrl
    .split('/')
    .slice(3)
    .join('/')

  useEffect(() => {
    if (!isFrontPage && urlLastChar(currentUrl) === '/') {
      navigate(`${relativeUrl.slice(0, -1)}`)
    }
  })
  return (
    <Styled.root>
      <Global styles={globalStyles(theme)} />
      <ThemeLayout
        className={
          colorMode === 'default' ? 'default-color-mode' : 'dark-color-mode'
        }
      >
        <Header>
          <Link to="/">{siteSettings.title}</Link>
          {!!addColorModes && <ColorSwitch />}
        </Header>
        <Main>
          <Grommet theme={theme}>
            <SlideSidebar />
          </Grommet>
          <MaybeWithContainer useContainer={useContainer}>
            {children}
          </MaybeWithContainer>
        </Main>
        <Footer />
      </ThemeLayout>
    </Styled.root>
  )
}

export default Layout
