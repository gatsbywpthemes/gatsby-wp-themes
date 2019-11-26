/** @jsx jsx */
import {
  ThemeProvider,
  Layout as ThemeLayout,
  Main,
  Header,
  Container,
  jsx,
} from 'theme-ui'
import { Link } from 'gatsby'
import useSiteSettings from 'gatsby-theme-blog-data/src/hooks/useSiteSettings'
import { Global } from '@emotion/core'
import { GlobalStyles } from '../styles/GlobalStyles'
import { Grommet } from 'grommet'
import Footer from './footer/Footer'
import SlideSidebar from './SlideSidebar'
import theme from '../gatsby-plugin-theme-ui/'
import '../styles/blocks.css'
import '../styles/custom-gutenstyles.css'

const MaybeWithContainer = ({ useContainer, children }) => {
  return !useContainer ? children : <Container>{children}</Container>
}

const Layout = ({ useContainer = true, children }) => {
  const siteSettings = useSiteSettings()
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <ThemeLayout>
        <Header>
          <Link to="/">{siteSettings.title}</Link>
        </Header>
        <Main>
          <Grommet theme={theme}>
            <SlideSidebar theme={theme} wordPressUrl={siteSettings.url} />
          </Grommet>
          <MaybeWithContainer useContainer={useContainer}>
            {children}
          </MaybeWithContainer>
        </Main>
        <Footer />
      </ThemeLayout>
    </ThemeProvider>
  )
}

export default Layout
