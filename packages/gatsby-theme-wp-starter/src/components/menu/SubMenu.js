import React from 'react'
import { useDisclosure, SlideFade, chakra } from '@chakra-ui/react'
import { Collapse } from 'starterUiComponents'
import { MenuLink, MenuItem } from 'starterComponents'

export const SubMenu = ({ menuItem, orientation }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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

  return (
    <chakra.li
      className="has-subMenu menu-item"
      position="relative"
      onMouseEnter={orientation === 'H' && onOpen}
      onMouseLeave={orientation === 'H' && onClose}
      // _after={orientation === 'H' && { content: "'>'" }}
      key={menuItem.id}
    >
      <WithCollapse orientation={orientation} menuItem={menuItem}>
        {orientation === 'H' && <MenuLink menuItem={menuItem} />}
        <WithSlideFade orientation={orientation} isOpen={isOpen}>
          <chakra.ul
            className="menuItemGroup sub-menu"
            sx={orientation === 'H' && { ...subMenuStyles }}
          >
            {menuItem.children.map((item) => (
              <MenuItem key={item.id} menuItem={item} />
            ))}
          </chakra.ul>
        </WithSlideFade>
      </WithCollapse>
    </chakra.li>
  )
}
