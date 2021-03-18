import React from 'react'
import { useMenusQuery } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

import { chakra, Stack } from '@chakra-ui/react'
import { MenuItem, SubMenu, flatListToHierarchical } from 'starterComponents'

export const Menu = ({ location = 'PRIMARY', orientation, ...props }) => {
  const menuEdges = useMenusQuery()
  const menuEdge = menuEdges.find((n) => n.locations.includes(location))
  const menuItems = menuEdge ? menuEdge.menuItems : null

  const styleVariant = orientation === 'V' ? menuVStyles : menuHStyles
  const style = {
    ...styleVariant,
    '[aria-current]': {
      fontStyle: 'italic',
      fontWeight: 'body',
    },

    '.menu-item,button': {
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
        <Stack
          direction={orientation === 'H' ? 'row' : 'column'}
          role="menu"
          className="menuItemGroup"
        >
          {menuNodes.map((menuItem) => {
            if (menuItem.children.length) {
              return (
                <SubMenu
                  key={menuItem.id}
                  menuItem={menuItem}
                  orientation={orientation}
                />
              )
            } else {
              return (
                <MenuItem
                  key={menuItem.id}
                  menuItem={menuItem}
                  orientation={orientation}
                />
              )
            }
          })}
        </Stack>
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
}

export const menuVStyles = {
  '.menu-item': {
    py: 3,
    borderBottom: '1px dashed rgba(256,256,256,.2)',
    '&:last-of-type': {
      border: 'none',
    },
  },
}
