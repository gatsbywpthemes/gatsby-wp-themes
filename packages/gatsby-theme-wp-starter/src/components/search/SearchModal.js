/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import {
  useDisclosure,
  Drawer,
  Flex,
  Box,
  IconButton,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/core'
import { SearchIcon } from '@chakra-ui/icons'
import { SearchForm } from 'starterComponents'

export const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <SearchIcon
        aria-label="Search"
        onClick={onOpen}
        color="primary"
        boxSize={8}
        cursor="pointer"
        mt={1}
        ml={3}
        pl={3}
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
        <DrawerContent bg="background" p={4}>
          <DrawerBody>
            <DrawerCloseButton />
            <SearchForm />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
