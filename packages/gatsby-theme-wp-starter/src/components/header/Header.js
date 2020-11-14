/** @jsx jsx */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Menu, SiteBranding } from 'starterComponents'
import { Container } from 'starterUiComponents'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

import { ColorSwitch } from 'starterComponents'
import { SearchModal } from 'starterComponents'
import {
  Box,
  Flex,
  jsx,
  Button,
  useColorModeValue as colorMode,
} from '@chakra-ui/react'

export const Header = () => {
  const { search, menuName } = useThemeOptions()

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
        {/* <Menu menuName={menuName} /> */}
        <ColorSwitch />
      </Container>
    </Box>
  )
}
