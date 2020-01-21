/** @jsx jsx */
import { jsx, Layout as StyledLayout, Main, useThemeUI } from 'theme-ui'
import { Fragment, useEffect } from 'react'
import { navigate } from 'gatsby'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Global } from '@emotion/core'
import { globalStyles } from '../styles/GlobalStyles'
import { Grommet } from 'grommet'
import grommetTheme from '../styles/grommet'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import '../styles/scss/styles.scss'
import slashes from 'remove-trailing-slash'

const Layout = ({ children, page, type = 'page', relativeUrl = '' }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ''
  const { theme } = useThemeUI()
  const { fullWidth } = useThemeOptions()

  const fullWidthClass = fullWidth.includes(page.slug) ? 'fullWidth' : ''
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  const endsWithSlash = currentUrl[currentUrl.length - 1] === '/'

  useEffect(() => {
    if (relativeUrl && endsWithSlash) {
      navigate(slashes(relativeUrl))
    }
  })

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
