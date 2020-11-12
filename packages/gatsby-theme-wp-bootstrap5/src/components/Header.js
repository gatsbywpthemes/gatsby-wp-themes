import React from 'react'
import { Link } from 'gatsby'
import { Menu } from './index'
import {
  useThemeOptions,
  useSiteSettings,
} from 'gatsby-theme-blog-data/src/hooks'

export const Header = () => {
  const siteSettings = useSiteSettings()
  const { menuName } = useThemeOptions()
  return (
    <header className="text-center pt-5 bg-light">
      <Link className="h1" to="/">
        {siteSettings.title} Theme
      </Link>
      <p>{siteSettings.tagline || `site tagline here`}</p>
      <Menu menuName={menuName} />
    </header>
  )
}
