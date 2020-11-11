/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import {
  useDisclosure,
  Drawer,
  IconButton,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue as colorMode,
} from '@chakra-ui/core'
import { SearchIcon } from '@chakra-ui/icons'
import { SearchForm } from 'starterComponents'

export const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        aria-label="Search"
        icon={<SearchIcon color="gray.200" />}
        variant="unstyled"
        onClick={onOpen}
        size="lg"
        borderLeftRadius={0}
        boxSize={8}
        cursor="pointer"
        mt={1}
        ml={3}
        borderLeft="1px solid"
        borderColor="primary"
      />
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        // width="100%"
      >
        <DrawerOverlay />
        <DrawerContent bg={colorMode('light', 'dark')} p={4}>
          <DrawerBody>
            <DrawerCloseButton />
            <SearchForm />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
