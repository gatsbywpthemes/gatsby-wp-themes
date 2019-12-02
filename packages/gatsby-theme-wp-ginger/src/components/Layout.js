/** @jsx jsx */
import {
  Layout as ThemeLayout,
  Main,
  Header,
  Container,
  jsx,
  useThemeUI,
} from 'theme-ui'
import { Fragment } from 'react'
import { Link } from 'gatsby'
import useSiteSettings from 'gatsby-theme-blog-data/src/hooks/useSiteSettings'
import { Global } from '@emotion/core'
import { globalStyles } from '../styles/GlobalStyles'
import { Grommet } from 'grommet'
import Footer from './footer/Footer'
import SlideSidebar from './SlideSidebar'
import '../styles/blocks.css'
import '../styles/custom-gutenstyles.css'

const MaybeWithContainer = ({ useContainer, children }) => {
  return !useContainer ? children : <Container>{children}</Container>
}

const Layout = ({ useContainer = true, children }) => {
  const siteSettings = useSiteSettings()
  const { theme } = useThemeUI()
  return (
    <Fragment>
      <Global styles={globalStyles(theme)} />
      <ThemeLayout>
        <Header>
          <Link to="/">{siteSettings.title}</Link>
        </Header>
        <Main>
          <Grommet theme={theme}>
            <SlideSidebar wordPressUrl={siteSettings.url} />
          </Grommet>
          <MaybeWithContainer useContainer={useContainer}>
            {children}
          </MaybeWithContainer>
        </Main>
        <Footer />
      </ThemeLayout>
    </Fragment>
  )
}

export default Layout
