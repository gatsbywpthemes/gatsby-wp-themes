/** @jsx jsx */
import { jsx, Layout as StyledLayout, Main, Flex } from 'theme-ui'
import { Fragment } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import ColorSwitch from './ColorSwitch'
import { Global } from '@emotion/core'
import globalStyles from '../styles/globalStyles'
import { Grommet } from 'grommet'
import grommetTheme from '../styles/grommet'
import '../styles/scss/styles.scss'

const Layout = ({ children }) => (
  <Grommet theme={grommetTheme}>
    <Global styles={globalStyles} />
    <StyledLayout>
      <Header />
      <Main>
        <Fragment>
          <Flex sx={{ justifyContent: `flex-end`, mb: `s`, mr: `xxs` }}>
            <ColorSwitch />
          </Flex>
          {children}
        </Fragment>
      </Main>
      <Footer />
    </StyledLayout>
  </Grommet>
)

export default Layout
