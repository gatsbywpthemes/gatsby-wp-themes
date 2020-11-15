import React from 'react'
import { Menu } from 'starterComponents'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

import {
  useDisclosure,
  Drawer,
  IconButton,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue as colorMode,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export const SlideSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { menuName } = useThemeOptions()

  return (
    <>
      <IconButton
        aria-label="open menu"
        variant="unstyled"
        icon={
          <HamburgerIcon boxSize={24} color={colorMode('text', 'dark.text')} />
        }
        onClick={onOpen}
        size="lg"
        borderLeftRadius={0}
        boxSize={8}
        cursor="pointer"
      />{' '}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={colorMode('white', 'ultraDark')} p={4}>
          <DrawerBody>
            <DrawerCloseButton />
            <Menu menuName={menuName} orientation="V" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
