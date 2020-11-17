import React from 'react'
import { useMenusQuery } from 'gatsby-theme-blog-data/src/hooks'

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
