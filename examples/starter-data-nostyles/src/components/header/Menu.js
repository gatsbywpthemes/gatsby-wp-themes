/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { createLocalLink } from '../../utils'
import { Collapse } from '../ui-components'
import {
  useMenusQuery,
  useThemeOptions,
} from 'gatsby-theme-blog-data/src/hooks'
import URIParser from 'urijs'
import slashes from 'remove-trailing-slash'

const renderLink = (menuItem, wordPressUrl, postsPath, closeMenu) => {
  let url = menuItem.url
  let close = closeMenu || ''
  const parsedUrl = new URIParser(url)
  if (parsedUrl.is('absolute')) {
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
        <Link to="/" dangerouslySetInnerHTML={{ __html: menuItem.label }} />
      ) : (
        <Link
          to={createLocalLink(menuItem.url, slashes(wordPressUrl))}
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
        />
      )
    ) : (
      menuItem.label
    )
  }
}

const renderMenuItem = (
  menuItem,
  wordPressUrl,
  postsPath,
  orientation,
  closeMenu
) => {
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    return renderSubMenu(menuItem, wordPressUrl, orientation, closeMenu)
  } else {
    return (
      <li className={`menu-item ${menuItem.cssClasses}`} key={menuItem.id}>
        {renderLink(menuItem, wordPressUrl, postsPath, closeMenu)}
      </li>
    )
  }
}
const WithCollapse = ({ orientation, children, menuItem }) =>
  orientation === 'vertical' ? (
    <Collapse menuItem={menuItem}>{children}</Collapse>
  ) : (
    children
  )

const renderSubMenu = (
  menuItem,
  wordPressUrl,
  postsPath,
  orientation,
  closeMenu
) => {
  return (
    <li
      className="has-subMenu menu-item"
      key={menuItem.id}
      sx={{ position: `relative` }}
    >
      {renderLink(menuItem, wordPressUrl, postsPath, closeMenu)}
      <WithCollapse orientation={orientation} menuItem={menuItem}>
        <ul className="menuItemGroup sub-menu">
          {menuItem.childItems.nodes.map((item) =>
            renderMenuItem(item, wordPressUrl, postsPath, closeMenu)
          )}
        </ul>
      </WithCollapse>
    </li>
  )
}

export const Menu = ({ menuName, orientation, closeMenu, ...props }) => {
  const menuEdges = useMenusQuery()
  const menuEdge = menuEdges.find((n) => menuName === n.name)
  const menuItems = menuEdge ? menuEdge.menuItems : null

  const { postsPath, wordPressUrl } = useThemeOptions()

  if (menuItems) {
    return (
      <nav className="menu" aria-label="main" {...props}>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
        <ul role="menu" className="menuItemGroup">
          {menuItems.nodes.map((menuItem) => {
            if (menuItem.childItems.nodes.length) {
              return renderSubMenu(
                menuItem,
                wordPressUrl,
                postsPath,
                orientation,
                closeMenu
              )
            } else {
              return renderMenuItem(
                menuItem,
                wordPressUrl,
                postsPath,
                orientation,
                closeMenu
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
