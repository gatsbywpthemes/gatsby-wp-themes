import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { SlideSidebar, SiteBranding } from './index'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { SearchForm } from '../search'

export const Header = () => {
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
    <header className="header">
      <div className="container">
        {search && (
          <SearchForm
            sx={{
              width: [`100%`, `100%`, `33%`],
              display: `flex`,
              justifyContent: [`center`, `center`, `flex-start`],
            }}
          />
        )}

        <SiteBranding title={title} />

        <SlideSidebar />
      </div>
    </header>
  )
}
