import React from 'react'
import {
  useMenusQuery,
  useThemeOptions,
} from 'gatsby-theme-blog-data/src/hooks'

import { chakra, useBreakpointValue } from '@chakra-ui/react'
import { MenuItem, SubMenu, flatListToHierarchical } from 'starterComponents'

export const Menu = ({ menuName, orientation, ...props }) => {
  const menuEdges = useMenusQuery()
  const menuEdge = menuEdges.find((n) => menuName === n.name)
  const menuItems = menuEdge ? menuEdge.menuItems : null

  const styleVariant = useBreakpointValue({
    base: menuVStyles,
    lg: menuHStyles,
  })
  const style = {
    ...styleVariant,

    li: {
      listStyle: 'none',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 'xs',
      letterSpacing: 'wider',
      px: 3,
    },
  }

  if (menuItems) {
    const menuNodes = flatListToHierarchical(menuItems.nodes, { idKey: 'id' })
    return (
      <chakra.nav
        className="menu"
        sx={{ ...style }}
        aria-label="main"
        {...props}
      >
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
        <ul role="menu" className="menuItemGroup">
          {menuNodes.map((menuItem) => {
            if (menuItem.children.length) {
              return <SubMenu menuItem={menuItem} orientation={orientation} />
            } else {
              return <MenuItem menuItem={menuItem} />
            }
          })}
        </ul>
      </chakra.nav>
    )
  } else {
    return null
  }
}

export const menuHStyles = {
  '>ul': {
    display: 'flex',
    '>li': {
      '&.has-subMenu': {
        cursor: 'pointer',
        position: 'relative',
      },
    },
  },
  '.sub-menu': {
    position: 'absolute',
    zIndex: 10,
    bg: 'black',
    color: 'white',
    shadow: 'lg',
    rounded: 'md',
    width: 'auto',
    whiteSpace: 'nowrap',
    transform: 'translate(-20px, 15px)',

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

export const menuVStyles = {
  '.menu-item': {
    display: 'block',
    py: 3,
    borderBottom: '1px dashed rgba(256,256,256,.2)',

    '&:last-of-type': {
      border: 'none',
    },
  },
  '[aria-current]': {
    fontStyle: 'italic',
    fontWeight: 'body',
  },
}
