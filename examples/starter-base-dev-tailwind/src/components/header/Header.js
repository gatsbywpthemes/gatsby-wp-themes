import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Menu, SiteBranding, SlideSidebar } from "baseComponents"
import { Container } from "baseUiComponents"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

import { ColorSwitch } from "baseComponents"
import { SearchModal } from "baseComponents"
import { Flex, HStack, useColorModeValue as colorMode } from "@chakra-ui/react"

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

  const { title } = data.wp.generalSettings

  return (
    <header className="py-4 shadow-md dark:text-dark-headerColor text-headerColor bg-headerBg dark:bg-dark-headerBg">
      <Container className="flex justify-between">
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
    </header>
  )
}
