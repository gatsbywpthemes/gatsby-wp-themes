import React from 'react'
import { useMenuItems } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { SubMenu, MenuItem } from 'gingerThemeComponents'
import { chakra, Box } from '@chakra-ui/react'

export const Menu = ({ location = 'PRIMARY' }) => {
  const menuItems = useMenuItems(location)
  return (
    menuItems && (
      <Box as="nav" mb="12" className="menu" aria-label="main">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
        <chakra.ul
          role="menu"
          textStyle="listRaw"
          m={0}
          p={0}
          sx={{ 'ul a': { px: 8 }, 'ul ul a': { px: 16 } }}
        >
          {menuItems.map((menuItem) => {
            if (menuItem.children.length) {
              return <SubMenu key={menuItem.id} menuItem={menuItem} />
            } else {
              return <MenuItem key={menuItem.id} menuItem={menuItem} />
            }
          })}
        </chakra.ul>
      </Box>
    )
  )
}
