/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import SlideSidebar from './SlideSidebar'
import SiteBranding from './SiteBranding'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import SearchForm from '../search/SearchForm'
import ColorSwitch from '../ColorSwitch'

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
    <header className="header" sx={{ variant: `header` }}>
      <Container className="container">
        {search && (
          <SearchForm
            sx={{
              width: [`100%`, `100%`, `33%`],
              display: `flex`,
              justifyContent: [`center`, `center`, `flex-start`],
            }}
          />
        )}

        <SiteBranding
          title={title}
          sx={{
            width: [`50%`, `50%`, `33%`],
            display: `flex`,
            ...styles,
          }}
        />

        <SlideSidebar
          sx={{
            width: [`50%`, `50%`, `33%`],
            display: `flex`,
            justifyContent: `flex-end`,
          }}
        />
      </Container>

      <ColorSwitch
        sx={{
          position: `absolute`,
          right: [`6%`, `6%`, `2%`],
          top: [15, 15, 25],
          '.headroom--pinned &': {
            top: [10, 10, 15],
          },
        }}
      />
    </header>
  )
}

export default Header
