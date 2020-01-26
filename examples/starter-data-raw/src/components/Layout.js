/** @jsx jsx */
import { jsx, Layout as StyledLayout, Main, useThemeUI } from 'theme-ui'
import { Fragment } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Global } from '@emotion/core'
import { globalStyles } from '../styles/GlobalStyles'
import { Grommet } from 'grommet'
import grommetTheme from '../styles/grommet'

import '../styles/scss/styles.scss'

const Layout = ({ children, page, type = 'page' }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ''

  const { theme } = useThemeUI()

  const pageTemplate = page && page.template ? page.template.templateName : ''

  const fullWidthClass =
    pageTemplate.toLowerCase() === 'full width' ? 'fullWidth' : ''

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
