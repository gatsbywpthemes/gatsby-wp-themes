import React from 'react'
import { useMenuItems } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { chakra, Stack } from '@chakra-ui/react'
import { MenuItem, SubMenu } from 'baseComponents'

export const Menu = ({ location = 'PRIMARY', orientation, ...props }) => {
  const menuItems = useMenuItems(location)
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

  return (
    menuItems && (
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
          {menuItems.map((menuItem) => {
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
  )
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
