import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Menu, SiteBranding, SlideSidebar } from 'starterComponents'
import { Container } from 'starterUiComponents'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

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
          {isLargerThan960 ? (
            <Menu menuName={menuName} orientation="H" />
          ) : (
            <SlideSidebar />
          )}

          <ColorSwitch />
        </HStack>
      </Container>
    </Box>
  )
}
