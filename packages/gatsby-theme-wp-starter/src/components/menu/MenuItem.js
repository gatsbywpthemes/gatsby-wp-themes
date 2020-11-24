import React from 'react'
import { chakra, Button, Box } from '@chakra-ui/react'
import { SubMenu, MenuLink } from 'starterComponents'

export const MenuItem = ({ menuItem, orientation }) => {
  if (menuItem.children.length) {
    return <SubMenu menuItem={menuItem} />
  } else {
    return (
      <Box
        as={orientation === 'H' && Button}
        variant="unstyled"
        className={`menu-item ${menuItem.cssClasses}`}
        key={menuItem.id}
      >
        <MenuLink menuItem={menuItem} />
      </Box>
    )
  }
}
