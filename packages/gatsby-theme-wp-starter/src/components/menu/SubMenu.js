import React from 'react'
import {
  useDisclosure,
  SlideFade,
  chakra,
  Menu,
  MenuButton,
  MenuItem as SubMenuItem,
  MenuList,
  Button,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { FaChevronDown } from 'react-icons/fa'

import { Collapse } from 'starterUiComponents'
import { MenuLink, MenuItem } from 'starterComponents'

const SubMenuV = ({ menuItem }) => {
  return (
    <chakra.li
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
    </chakra.li>
  )
}

const SubMenuH = ({ menuItem }) => {
  console.log('item', menuItem)

  return (
    <Menu key={menuItem.id}>
      <MenuButton
        as={Button}
        variant="unstyled"
        rightIcon={<ChevronDownIcon />}
      >
        {menuItem.label}
      </MenuButton>
      <MenuList>
        {menuItem.children.map((item) => (
          <SubMenuItem as="li" key={item.id}>
            <MenuLink menuItem={item} />
          </SubMenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export const SubMenu = ({ menuItem, orientation }) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  const WithCollapse = ({ orientation, children, menuItem }) =>
    orientation === 'V' ? (
      <Collapse menuItem={menuItem}>{children}</Collapse>
    ) : (
      children
    )

  const WithSlideFade = ({ orientation, children, isOpen }) =>
    orientation === 'H' ? (
      <SlideFade in={isOpen} offsetY="8px">
        {children}
      </SlideFade>
    ) : (
      children
    )

  const subMenuStyles = {
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
  }

  return orientation === 'H' ? (
    <SubMenuH menuItem={menuItem} />
  ) : (
    <SubMenuV menuItem={menuItem} />
  )
}
