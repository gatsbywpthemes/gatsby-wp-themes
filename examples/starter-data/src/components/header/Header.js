/** @jsx jsx */
import { jsx, Container, Header as StyledHeader, Box } from 'theme-ui'
import { Fragment } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import SlideSidebar from './SlideSidebar'
import SiteBranding from './SiteBranding'

import Headroom from 'react-headroom'
import Search from 'gatsby-theme-algolia/src/components/Search'

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wp {
        generalSettings {
          title
          url
        }
      }
    }
  `)

  const { title, url } = data.wp.generalSettings

  return (
    <Fragment>
      <Headroom>
        <StyledHeader className="header">
          <Container className="container">
            <Box
              sx={{
                width: [`100%`, `100%`, `33%`],
                display: `flex`,
                justifyContent: [`center`, `center`, `flex-start`],
              }}
            >
              <Search indices={searchIndices} />
            </Box>
            <Box
              sx={{
                width: [`50%`, `50%`, `33%`],
                display: `flex`,
                justifyContent: [`flex-start`, `flex-start`, `center`],
              }}
            >
              <SiteBranding title={title} />
            </Box>
            <Box
              sx={{
                width: [`50%`, `50%`, `33%`],
                display: `flex`,
                justifyContent: `flex-end`,
              }}
            >
              <SlideSidebar wordPressUrl={url} />
            </Box>
          </Container>
        </StyledHeader>
      </Headroom>
    </Fragment>
  )
}

export default Header