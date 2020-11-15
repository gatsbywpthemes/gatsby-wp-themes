import React from 'react'
import { Link } from 'gatsby'
import { createLocalLink } from 'starterUtils'
import {
  useMenusQuery,
  useThemeOptions,
} from 'gatsby-theme-blog-data/src/hooks'
import URIParser from 'urijs'
import slashes from 'remove-trailing-slash'
import {
  Box,
  Button,
  useMediaQuery,
  chakra,
  IconButton,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

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

const renderMenuItem = (menuItem, wordPressUrl) => {
  if (menuItem.children.length) {
    return renderSubMenu(menuItem, wordPressUrl)
  } else {
    return (
      <li className={`menu-item ${menuItem.cssClasses}`} key={menuItem.id}>
        {renderLink(menuItem, wordPressUrl)}
      </li>
    )
  }
}

const renderSubMenu = (menuItem, wordPressUrl, orientation) => {
  return (
    <chakra.li
      className="has-subMenu menu-item"
      position="relative"
      _after={orientation === 'H' && { content: "'>'" }}
      key={menuItem.id}
    >
      {renderLink(menuItem, wordPressUrl)}
      <ul className="menuItemGroup sub-menu">
        {menuItem.children.map((item) => renderMenuItem(item, wordPressUrl))}
      </ul>
    </chakra.li>
  )
}

export const Menu = ({ menuName, orientation, ...props }) => {
  const menuEdges = useMenusQuery()
  const menuEdge = menuEdges.find((n) => menuName === n.name)
  const menuItems = menuEdge ? menuEdge.menuItems : null

  const { wordPressUrl } = useThemeOptions()

  if (menuItems) {
    const menuNodes = flatListToHierarchical(menuItems.nodes, { idKey: 'id' })
    return (
      <chakra.nav
        className="menu"
        sx={{ ...styles }}
        aria-label="main"
        {...props}
      >
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
        <ul role="menu" className="menuItemGroup">
          {menuNodes.map((menuItem) => {
            if (menuItem.children.length) {
              return renderSubMenu(menuItem, wordPressUrl, orientation)
            } else {
              return renderMenuItem(menuItem, wordPressUrl)
            }
          })}
        </ul>
      </chakra.nav>
    )
  } else {
    return null
  }
}
const menuHStyles = {
  '>ul': {
    display: 'flex',
    '>li': {
      fontWeight: 'bold',
      px: 3,
      '&.has-subMenu': {
        '&:after': {},
      },
    },
  },
  '.sub-menu': {
    display: 'none',
  },
}
const menuVStyles = {}

const styles = {
  li: {
    listStyleType: 'none',
  },
  '@media( min-width:960px)': {
    ...menuHStyles,
  },
}
