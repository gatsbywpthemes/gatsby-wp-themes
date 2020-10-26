/** @jsx jsx */
import { jsx, Box, useThemeUI } from 'theme-ui'
import { Fragment } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { Global } from '@emotion/core'
import { Grommet } from 'grommet'
import { grommetStyles, globalStyles } from '../styles'
import Headroom from 'react-headroom'

import '../styles/scss/styles.scss'

export const Layout = ({ children, page, type = 'page' }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ''

  const { theme } = useThemeUI()

  const pageTemplate = page && page.template ? page.template.__typename : ''

  const fullWidthClass =
    pageTemplate === 'WpFullWidthTemplate' ? 'fullWidth' : ''

  return (
    <Grommet theme={grommetStyles}>
      <Global styles={globalStyles(theme)} />
      <Box
        sx={{
          '&.fullWidth': {
            '.mainContainer': {
              maxWidth: `100%`,
              px: 0,
            },
          },
        }}
        className={`${layoutClass}-${type} ${fullWidthClass}`}
      >
        <Headroom>
          <Header />
        </Headroom>
        <main
          sx={{
            py: `xxl`,
            '.fullWidth &': {
              py: 0,
              mt: -32,
            },
          }}
        >
          <Fragment>{children}</Fragment>
        </main>
        <Footer />
      </Box>
    </Grommet>
  )
}
