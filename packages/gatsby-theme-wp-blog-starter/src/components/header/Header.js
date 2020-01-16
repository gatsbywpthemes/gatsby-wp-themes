/** @jsx jsx */
import { jsx, Container, Header as StyledHeader, Box, Flex } from 'theme-ui'
import { Fragment } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import SlideSidebar from './SlideSidebar'
import SiteBranding from './SiteBranding'

import Headroom from 'react-headroom'
import Search from 'gatsby-theme-algolia/src/components/Search'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import SearchForm from '../search/SearchForm'
import ColorSwitch from '../ColorSwitch'

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Header = () => {
  const { search } = useThemeOptions()
  const styles = search
    ? { justifyContent: [`flex-start`, `flex-start`, `center`] }
    : { justifyContent: `flex-start` }

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

  const { title } = data.wp.generalSettings

  return (
    <Fragment>
      <Headroom>
        <StyledHeader className="header">
          <Container className="container">
            {search && (
              <Box
                sx={{
                  width: [`100%`, `100%`, `33%`],
                  display: `flex`,
                  justifyContent: [`center`, `center`, `flex-start`],
                }}
              >
                {search === 'algolia' ? (
                  <Search indices={searchIndices} />
                ) : (
                  <SearchForm />
                )}
              </Box>
            )}
            <Box
              sx={{
                width: [`50%`, `50%`, `33%`],
                display: `flex`,
                ...styles,
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
              <SlideSidebar />
            </Box>
          </Container>
          <Flex
            sx={{
              position: `absolute`,
              right: [`6%`, `6%`, `2%`],
              top: [15, 15, 25],
              '.headroom--pinned &': {
                top: [10, 10, 15],
              },
            }}
          >
            <ColorSwitch />
          </Flex>
        </StyledHeader>
      </Headroom>
    </Fragment>
  )
}

export default Header
