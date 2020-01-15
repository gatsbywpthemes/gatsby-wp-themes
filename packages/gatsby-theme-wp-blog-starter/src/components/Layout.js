/** @jsx jsx */
import {
  jsx,
  Layout as StyledLayout,
  Main,
  Flex,
  useThemeUI,
  Styled,
} from 'theme-ui'
import { Fragment } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import ColorSwitch from './ColorSwitch'
import { Global } from '@emotion/core'
import { globalStyles } from '../styles/GlobalStyles'
import { Grommet } from 'grommet'
import grommetTheme from '../styles/grommet'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import '../styles/scss/styles.scss'

const Layout = ({ children, page, type = 'page' }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ''
  const { theme } = useThemeUI()
  const { fullWidth } = useThemeOptions()

  const fullWidthClass = fullWidth.includes(page.slug) ? 'fullWidth' : ''
  return (
    <Grommet theme={grommetTheme}>
      <Global styles={globalStyles(theme)} />
      <StyledLayout className={`${layoutClass}-${type} ${fullWidthClass}`}>
        <Header />
        <Main>
          <Fragment>{children}</Fragment>
        </Main>
        <Footer />
      </StyledLayout>
    </Grommet>
  )
}

export default Layout
