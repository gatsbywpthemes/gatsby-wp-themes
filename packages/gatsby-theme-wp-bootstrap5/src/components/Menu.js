import React from 'react'
import { Link } from 'gatsby'
import { Collapse } from './ui-components'
import { createLocalLink } from '../utils'
import {
  useMenusQuery,
  useThemeOptions,
} from 'gatsby-theme-blog-data/src/hooks'
import URIParser from 'urijs'
import slashes from 'remove-trailing-slash'

const flatListToHierarchical = (
  data = [],
  { idKey = 'key', parentKey = 'parentId', childrenKey = 'children' } = {}
) => {
  const tree = []
  const childrenOf = {}
  data.forEach((item) => {
    const newItem = { ...item }
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
    childrenOf[id] = childrenOf[id] || []
    newItem[childrenKey] = childrenOf[id]
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem)
  })
  return tree
}

const renderLink = (menuItem, wordPressUrl) => {
  let url = menuItem.url
  const parsedUrl = new URIParser(url)
  if (parsedUrl.is('absolute')) {
    const targetRelAttrs =
      menuItem.target === '_blank'
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {}
    return (
      <a className="nav-link" href={menuItem.url} {...targetRelAttrs}>
        {menuItem.label}
      </a>
    )
  } else {
    return menuItem.url !== '#' ? (
      menuItem.url === wordPressUrl ? (
        <Link
          className="nav-link"
          to="/"
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
        />
      ) : (
        <Link
          className="nav-link"
          to={createLocalLink(menuItem.url, slashes(wordPressUrl))}
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
        />
      )
    ) : (
      <span>{menuItem.label}</span>
    )
  }
}

const renderMenuItem = (menuItem, wordPressUrl) => {
  if (menuItem.children.length) {
    return renderSubMenu(menuItem, wordPressUrl)
  } else {
    return (
      <li className={`nav-item ${menuItem.cssClasses}`} key={menuItem.id}>
        {renderLink(menuItem, wordPressUrl)}
      </li>
    )
  }
}

const renderSubMenu = (menuItem, wordPressUrl) => {
  return (
    <li className="nav-item menu-item dropdown" key={menuItem.id}>
      {renderLink(menuItem, wordPressUrl)}
      <Collapse menuItem={menuItem}>
        <ul className="dropdown-menu">
          {menuItem.children.map((item) => renderMenuItem(item, wordPressUrl))}
        </ul>
      </Collapse>
    </li>
  )
}

export const Menu = ({ menuName }) => {
  const { wordPressUrl } = useThemeOptions()
  const menuEdges = useMenusQuery()
  const menuEdge = menuEdges.find((n) => menuName === n.name)
  const menuItems = menuEdge ? menuEdge.menuItems : null

  if (menuItems) {
    const menuNodes = flatListToHierarchical(menuItems.nodes, { idKey: 'id' })
    return (
      <nav
        className="navbar navbar-expand-lg text-uppercase border mb-5 mt-5"
        style={{ letterSpacing: '2px', fontSize: '0.75rem' }}
        aria-label="main"
      >
        <div class="container">
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
          <ul role="menu" className="navbar-nav">
            {menuNodes.map((menuItem) => {
              if (menuItem.children.length) {
                return renderSubMenu(menuItem, wordPressUrl)
              } else {
                return renderMenuItem(menuItem, wordPressUrl)
              }
            })}
          </ul>
        </div>
      </nav>
    )
  } else {
    return null
  }
}
