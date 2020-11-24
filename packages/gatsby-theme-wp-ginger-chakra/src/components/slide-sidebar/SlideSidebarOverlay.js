import React from 'react'
import { Button } from '@chakra-ui/react'

export const SlideSidebarOverlay = ({ openClass, closeMenu }) => {
  return (
    <Button
      className="menu-overlay"
      variant="link"
      onClick={closeMenu}
      aria-label="Close sidebar"
      position="fixed"
      top="0"
      bottom="0"
      right="0"
      left="0"
      zIndex="99"
      w="full"
      h="100%"
      bg="blackAlpha.400"
      _hover={{
        bg: 'blackAlpha.400',
      }}
    />
  )
}
