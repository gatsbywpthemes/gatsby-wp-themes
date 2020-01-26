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
const renderLink = (menuItem, wordPressUrl, postsPath, hashClickAction) => {
  let url = menuItem.url

  if (menuItem.connectedObject.__typename === 'WP_MenuItem') {
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
      return (
        <Link onClick={hashClickAction} to={url}>
          {menuItem.label}
        </Link>
      )
    }
    return (
      <a href={menuItem.url} target="_blank" rel="noopener noreferrer">
        {menuItem.label}
      </a>
    )
  } else {
    return menuItem.url !== '#' ? (
      menuItem.url === wordPressUrl ? (
        <Link to="/"> {menuItem.label}</Link>
      ) : (
        <Link
          to={`${normalize(
            createLocalLink(menuItem.url, slashes(wordPressUrl))
          )}/`}
        >
          {menuItem.label}
        </Link>
      )
    ) : (
      menuItem.label
    )
  }
}

const renderMenuItem = (menuItem, wordPressUrl, postsPath, hashClickAction) => {
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    return renderSubMenu(menuItem, wordPressUrl)
  } else {
    return (
      <li className="menu-item" key={menuItem.id}>
        {renderLink(menuItem, wordPressUrl, postsPath, hashClickAction)}
      </li>
    )
  }
}

const renderSubMenu = (menuItem, wordPressUrl, postsPath, hashClickAction) => {
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
            renderMenuItem(item, wordPressUrl, postsPath, hashClickAction)
          )}
        </ul>
      </Collapse>
    </li>
  )
}

const Menu = ({ menuName, hashClickAction }) => {
  const { wordPressUrl, postsPath } = useThemeOptions()
  const menuEdges = useMenusQuery()
  const menuEdge = menuEdges.find(n => menuName === n.node.name)
  const menuItems = menuEdge ? menuEdge.node.menuItems : null

  if (menuItems) {
    console.log(menuItems)
    return (
      <nav
        className="menu"
        aria-label="main"
        sx={{
          variant: [`menus.slideMenu`],
        }}
      >
        <ul sx={{ variant: 'special' }} role="menu" className="menuItemGroup">
          {menuItems.nodes.map(menuItem => {
            if (menuItem.childItems.nodes.length) {
              return renderSubMenu(
                menuItem,
                wordPressUrl,
                postsPath,
                hashClickAction
              )
            } else {
              return renderMenuItem(
                menuItem,
                wordPressUrl,
                postsPath,
                hashClickAction
              )
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
