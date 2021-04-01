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
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { SearchForm } from 'baseComponents'

export const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        aria-label="Search"
        icon={<SearchIcon color={colorMode('gray.600', 'light')} />}
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
        <DrawerContent bg={colorMode('searchBg', 'modes.dark.searchBg')} p={4}>
          <DrawerBody>
            <DrawerCloseButton />
            <SearchForm />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
