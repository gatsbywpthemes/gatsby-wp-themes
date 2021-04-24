import React from 'react'
import { Menu, Widget } from 'baseComponents'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

import {
  useDisclosure,
  Drawer,
  IconButton,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue as colorMode,
  Box,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export const SlideSidebar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { widgetAreas } = useThemeOptions()
  const widgets = widgetAreas.slideMenuWidgets || []

  return (
    <Box {...props}>
      <IconButton
        aria-label="open menu"
        variant="unstyled"
        icon={
          <HamburgerIcon
            boxSize={6}
            color={colorMode('text', 'modes.dark.text')}
          />
        }
        onClick={onOpen}
        size="lg"
        boxSize={8}
        cursor="pointer"
      />{' '}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bg={colorMode('mobileMenuBg', 'modes.dark.mobileMenuBg')}
          minW={{ base: '100%', md: '420px' }}
          color={colorMode('mobileMenuColor', 'modes.dark.mobileMenuColor')}
          shadow="2xl"
          p={4}
        >
          <DrawerBody>
            <DrawerCloseButton />
            <Menu orientation="V" mt={7} />
            {widgets.map((widget, i) => (
              <Box key={i} sx={{ '.widget': { my: 10 } }}>
                <Widget colorBg="dark" widget={widget} />
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
