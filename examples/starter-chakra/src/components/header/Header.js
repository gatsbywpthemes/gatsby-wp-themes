/** @jsx jsx */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Menu, SiteBranding } from './index'
import { Container } from '../ui-components'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

import { ColorSwitch } from '../ColorSwitch'
import { SearchModal } from '../search'
import { Box, Flex, jsx, Button } from '@chakra-ui/core'

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
    <Box as="header" bg="gray.700" color="white" className="header">
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
