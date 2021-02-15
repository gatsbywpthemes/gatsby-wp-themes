import React from 'react'
import { Link } from 'gatsby'
import { Menu } from '../index'
import { useSiteSettings } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const Header = () => {
  const { title, description } = useSiteSettings()
  return (
    <>
      <header className="text-center py-3 py-lg-5 bg-light">
        <Link className="h1 text-decoration-none text-reset" to="/">
          {title}
        </Link>
        {description && (
          <p
            className="mb-0 heading-font"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </header>
      <Menu />
    </>
  )
}
