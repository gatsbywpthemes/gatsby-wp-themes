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
  useColorModeValue as colorMode,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Collapse } from 'starterUiComponents'

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

const WithCollapse = ({ orientation, children, menuItem }) =>
  orientation === 'V' ? (
    <Collapse menuItem={menuItem}>{children}</Collapse>
  ) : (
    children
  )

const renderSubMenu = (menuItem, wordPressUrl, orientation) => {
  return (
    <chakra.li
      className="has-subMenu menu-item"
      position="relative"
      // _after={orientation === 'H' && { content: "'>'" }}
      key={menuItem.id}
    >
      <WithCollapse orientation={orientation} menuItem={menuItem}>
        {orientation === 'H' && renderLink(menuItem, wordPressUrl)}
        <chakra.ul className="menuItemGroup sub-menu">
          {menuItem.children.map((item) => renderMenuItem(item, wordPressUrl))}
        </chakra.ul>
      </WithCollapse>
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
      textTransform: 'uppercase',
      fontSize: 'xs',
      letterSpacing: 'wider',
      px: 3,
      '&.has-subMenu': {
        a: {
          // fontWeight: 'medium !important',
        },
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
          '.sub-menu': {
            visibility: 'visible',
            opacity: 1,
            transform: 'translateY(8px)',
          },
        },
        '&:after': {},
      },
    },
  },
  '.sub-menu': {
    position: 'absolute',
    display: 'block',
    visibility: 'hidden',
    opacity: '0',
    // bg: colorMode('white', 'ultraDark'),
    bg: 'black',
    color: 'white',
    shadow: 'lg',
    rounded: 'md',
    width: 'auto',
    whiteSpace: 'nowrap',
    transition: 'all .4s ease-in-out',
    transform: 'translateY(15px)',
    left: -4,
    px: 5,
    py: 4,
    '>li': {
      py: 1,
      a: {
        '&:hover': {
          color: 'primary',
        },
      },
    },
    '&:before': {
      content: "''",
      width: 0,
      height: 0,
      borderLeft: '7px solid transparent',
      borderRight: '7px solid transparent',
      borderBottom: '7px solid black',
      position: 'absolute',
      top: '-5px',
      left: 5,
    },
  },
}
const menuVStyles = {
  '.menu-item': {
    display: 'block',
    py: 4,
    borderBottom: '1px solid',
    borderColor: 'dark',
    '&:last-of-type': {
      border: 'none',
    },
  },
  '[aria-current]': {
    fontStyle: 'italic',
    fontWeight: 'body',
  },
}

const styles = {
  li: {
    listStyleType: 'none',
  },
  // ...menuVStyles,
  '@media( min-width:960px)': {
    ...menuHStyles,
  },
}
