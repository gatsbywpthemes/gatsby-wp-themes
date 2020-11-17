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
          <chakra.ul className="menuItemGroup sub-menu">
            {menuItem.children.map((item) => (
              <MenuItem key={item.id} menuItem={item} />
            ))}
          </chakra.ul>
        </WithSlideFade>
      </WithCollapse>
    </chakra.li>
  )
}
