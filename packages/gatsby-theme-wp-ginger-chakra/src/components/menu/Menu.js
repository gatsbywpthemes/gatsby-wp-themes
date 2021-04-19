import React from 'react'
import { useMenusQuery } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { SubMenu, MenuItem } from 'gingerThemeComponents'
import { chakra, Box } from '@chakra-ui/react'

import { flatListToHierarchical } from './flatListToHierarchical'

export const Menu = ({ location = 'PRIMARY' }) => {
  const menuEdges = useMenusQuery()
  const menuEdge = menuEdges.find((n) => n.locations.includes(location))
  const menuItems = menuEdge ? menuEdge.menuItems : null
  if (menuItems) {
    const menuNodes = flatListToHierarchical(menuItems.nodes, { idKey: 'id' })
    return (
      <Box as="nav" mb="12" className="menu" aria-label="main">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
        <chakra.ul
          role="menu"
          textStyle="listRaw"
          m={0}
          p={0}
          sx={{ 'ul a': { px: 8 }, 'ul ul a': { px: 16 } }}
        >
          {menuNodes.map((menuItem) => {
            if (menuItem.children.length) {
              return <SubMenu key={menuItem.id} menuItem={menuItem} />
            } else {
              return <MenuItem key={menuItem.id} menuItem={menuItem} />
            }
          })}
        </chakra.ul>
      </Box>
    )
  } else {
    return null
  }
}
