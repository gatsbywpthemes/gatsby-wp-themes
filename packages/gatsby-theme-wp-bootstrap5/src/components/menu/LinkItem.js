import React from 'react'
import URIParser from 'urijs'
import slashes from 'remove-trailing-slash'
import { Link } from 'gatsby'
import { createLocalLink } from '../../utils'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

export const LinkItem = ({ menuItem, sub }) => {
  const { wordPressUrl } = useThemeOptions()
  const itemClass = sub ? 'nav-link text-reset p-2' : 'text-reset nav-link'
  let url = menuItem.url
  const parsedUrl = new URIParser(url)
  if (parsedUrl.is('absolute')) {
    const targetRelAttrs =
      menuItem.target === '_blank'
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {}
    return (
      <a className={itemClass} href={menuItem.url} {...targetRelAttrs}>
        {menuItem.label}
      </a>
    )
  } else {
    return menuItem.url !== '#' ? (
      menuItem.url === wordPressUrl ? (
        <Link
          className={itemClass}
          to="/"
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
        />
      ) : (
        <Link
          className={itemClass}
          to={createLocalLink(menuItem.url, slashes(wordPressUrl))}
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
        />
      )
    ) : (
      <span className={itemClass}>{menuItem.label}</span>
    )
  }
}
