/** @jsx jsx */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Menu, SiteBranding } from './index'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { SearchForm } from '../search'
import { ColorSwitch } from '../ColorSwitch'
import {
  Box,
  Flex,
  Heading,
  Input,
  Icon,
  useTheme,
  Button,
  jsx,
  CenterContainer,
} from '@chakra-ui/core'

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
      <Flex
        maxW="container.xl"
        mx="auto"
        px={[4, 4, 5, 10]}
        justify="space-between"
      >
        {search && <SearchForm />}
        <SiteBranding title={title} />
        <Menu menuName={menuName} />
        <Button colorScheme="pink">Button</Button>
      </Flex>
      <ColorSwitch />
    </Box>
  )
}
