import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Menu, SiteBranding, SlideSidebar } from 'starterComponents'
import { Container } from 'starterUiComponents'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

import { ColorSwitch } from 'starterComponents'
import { SearchModal } from 'starterComponents'
import {
  Box,
  Flex,
  HStack,
  useMediaQuery,
  useColorModeValue as colorMode,
} from '@chakra-ui/react'

export const Header = () => {
  const { search, menuName } = useThemeOptions()
  const [isLargerThan960] = useMediaQuery('(min-width: 960px)')

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wp {
        generalSettings {
          title
          url
        }
      }
    }
  `)

  const { title } = data.wp.generalSettings

  return (
    <Box
      as="header"
      bg={colorMode('headerBg', 'dark.headerBg')}
      py={4}
      className="header"
      boxShadow="md"
    >
      <Container display="flex" justifyContent="space-between">
        <Flex>
          <SiteBranding title={title} />
          {search && <SearchModal />}
        </Flex>
        <HStack>
          <Menu
            menuName={menuName}
            orientation="H"
            display={{ base: 'none', lg: 'block' }}
          />

          <SlideSidebar display={{ base: 'block', lg: 'none' }} />

          <ColorSwitch />
        </HStack>
      </Container>
    </Box>
  )
}
