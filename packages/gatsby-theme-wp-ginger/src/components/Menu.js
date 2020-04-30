/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Collapse from './Collapse'
import { createLocalLink } from '../utils'
import useMenusQuery from 'gatsby-theme-blog-data/src/hooks/useMenusQuery'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import URIParser from 'urijs'
import slashes from 'remove-trailing-slash'
import normalize from 'normalize-path'

const subdirectoryCorrection = (path, wordPressUrl, hash = '') => {
  path += `/${hash}`
  const wordPressUrlParsed = new URIParser(slashes(wordPressUrl))
  // detect if WordPress is installed in subdirectory
  const subdir = wordPressUrlParsed.path()
  return normalize(path.replace(subdir, '/')) || '/'
}
const renderLink = (menuItem, wordPressUrl, postsPath) => {
  let url = menuItem.url

  if (menuItem.connectedObject.__typename === 'WpMenuItem') {
    const parsedUrl = new URIParser(url)
    if (menuItem.url === `#`) {
      return menuItem.label
    }
    if (parsedUrl.is('relative')) {
      url = subdirectoryCorrection(url, wordPressUrl)
      return <Link to={url}> {menuItem.label}</Link>
    }
    const wordPressUrlParsed = new URIParser(wordPressUrl)
    const path = parsedUrl.path()
    const hash = parsedUrl.hash()

    if (
      parsedUrl.hostname() === wordPressUrlParsed.hostname() &&
      path.indexOf(slashes(wordPressUrlParsed.path())) === 0
    ) {
      url = subdirectoryCorrection(path, wordPressUrl, hash)
      return <Link to={url}>{menuItem.label}</Link>
    }
    const targetRelAttrs =
      menuItem.target === '_blank'
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {}
    return (
      <a href={menuItem.url} {...targetRelAttrs}>
        {menuItem.label}
      </a>
    )
  } else {
    return menuItem.url !== '#' ? (
      menuItem.url === wordPressUrl ? (
        <Link to="/"> {menuItem.label}</Link>
      ) : (
        <Link to={createLocalLink(menuItem.url, slashes(wordPressUrl))}>
          {menuItem.label}
        </Link>
      )
    ) : (
      menuItem.label
    )
  }
}

const renderMenuItem = (menuItem, wordPressUrl, postsPath) => {
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    return renderSubMenu(menuItem, wordPressUrl)
  } else {
    return (
      <li className={`menu-item ${menuItem.cssClasses}`} key={menuItem.id}>
        {renderLink(menuItem, wordPressUrl, postsPath)}
      </li>
    )
  }
}

const renderSubMenu = (menuItem, wordPressUrl, postsPath) => {
  return (
    <li
      className="has-subMenu menu-item"
      key={menuItem.id}
      sx={{ position: 'relative' }}
    >
      {renderLink(menuItem, wordPressUrl, postsPath)}
      <Collapse menuItem={menuItem}>
        <ul className="menuItemGroup sub-menu">
          {menuItem.childItems.nodes.map(item =>
            renderMenuItem(item, wordPressUrl, postsPath)
          )}
        </ul>
      </Collapse>
    </li>
  )
}

const Menu = ({ menuName }) => {
  const { wordPressUrl, postsPath } = useThemeOptions()
  const menuEdges = useMenusQuery()
  const menuEdge = menuEdges.find(n => menuName === n.name)
  const menuItems = menuEdge ? menuEdge.menuItems : null

  if (menuItems) {
    return (
      <nav
        className="menu"
        aria-label="main"
        sx={{
          variant: [`menus.slideMenu`],
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
        <ul sx={{ variant: 'special' }} role="menu" className="menuItemGroup">
          {menuItems.nodes.map(menuItem => {
            if (menuItem.childItems.nodes.length) {
              return renderSubMenu(menuItem, wordPressUrl, postsPath)
            } else {
              return renderMenuItem(menuItem, wordPressUrl, postsPath)
            }
          })}
        </ul>
      </nav>
    )
  } else {
    return null
  }
}

export default Menu
