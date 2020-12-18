import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Menu, SiteBranding } from './index'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { SearchForm } from '../search'

export const Header = () => {
  const { search, menuName } = useThemeOptions()

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
        {search && <SearchForm />}

        <SiteBranding title={title} />

        <Menu menuName={menuName} />
      </div>
    </header>
  )
}
