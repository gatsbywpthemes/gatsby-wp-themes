import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Menu, SiteBranding, SlideSidebar } from "baseComponents"
import { Container } from "baseUiComponents"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

import { ColorSwitch } from "baseComponents"
import { SearchModal } from "baseComponents"
import {
  Box,
  Flex,
  HStack,
  useColorModeValue as colorMode,
} from "@chakra-ui/react"

export const Header = () => {
  const { addWordPressSearch: search, addColorModes } = useThemeOptions()

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

  const { title } = data.wp?.generalSettings

  return (
    <Box
      as="header"
      color={colorMode("headerColor", "modes.dark.headerColor")}
      bg={colorMode("headerBg", "modes.dark.headerBg")}
      py={4}
      className="header"
      boxShadow="md"
    >
      <Container display="flex" justifyContent="space-between">
        <Flex alignItems="center">
          <SiteBranding title={title} />
          {search && <SearchModal />}
        </Flex>
        <HStack>
          <Menu orientation="H" display={{ base: "none", lg: "block" }} />

          <SlideSidebar display={{ base: "block", lg: "none" }} />

          {addColorModes && <ColorSwitch />}
        </HStack>
      </Container>
    </Box>
  )
}
