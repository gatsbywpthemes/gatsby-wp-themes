import React from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { MenuItem } from './MenuItem'
import { LinkItem } from './LinkItem'
import { Button, ListItem, Collapse, useDisclosure } from '@chakra-ui/react'
export const SubMenu = ({ menuItem }) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <ListItem position="relative" key={menuItem.id}>
      <LinkItem menuItem={menuItem} />
      <Button
        variant="link"
        height="12"
        color="inherit"
        aria-label="Open menu item"
        onClick={onToggle}
        position="absolute"
        top="0"
        right="1"
      >
        {isOpen ? <FiChevronDown /> : <FiChevronRight />}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <ul>
          {menuItem.children.map((item) => (
            <MenuItem key={item.id} menuItem={item} />
          ))}
        </ul>
      </Collapse>
    </ListItem>
  )
}