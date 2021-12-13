import React from "react"
import {
  chakra,
  Box,
  Menu,
  MenuButton,
  MenuItem as SubMenuItem,
  MenuList,
  Button,
  useColorModeValue,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

import { Collapse } from "baseUiComponents"
import { MenuLink, MenuItem } from "baseComponents"

const SubMenuV = ({ menuItem }) => {
  return (
    <Box
      className="has-subMenu menu-item"
      position="relative"
      key={menuItem.id}
    >
      <Collapse menuItem={menuItem}>
        <chakra.ul className="menuItemGroup sub-menu">
          {menuItem.children.map((item) => (
            <MenuItem key={item.id} menuItem={item} />
          ))}
        </chakra.ul>
      </Collapse>
    </Box>
  )
}

const SubMenuH = ({ menuItem }) => {
  return (
    <Menu key={menuItem.id} autoSelect={false}>
      <MenuButton
        as={Button}
        className="menu-item"
        variant="unstyled"
        rightIcon={<ChevronDownIcon />}
        _hover={{
          color: useColorModeValue("accent", "modes.dark.accent"),
        }}
      >
        {menuItem.label}
      </MenuButton>
      <Box position="absolute">
        <MenuList>
          {menuItem.children.map((item) => (
            <SubMenuItem key={item.id}>
              <MenuLink menuItem={item} />
            </SubMenuItem>
          ))}
        </MenuList>
      </Box>
    </Menu>
  )
}

export const SubMenu = ({ menuItem, orientation }) => {
  return orientation === "H" ? (
    <SubMenuH menuItem={menuItem} />
  ) : (
    <SubMenuV menuItem={menuItem} />
  )
}
