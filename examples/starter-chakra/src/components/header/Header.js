/** @jsx jsx */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Menu, SiteBranding } from './index'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { SearchForm } from '../search'
import {
  Box,
  Flex,
  Heading,
  Input,
  Icon,
  useTheme,
  Button,
  jsx,
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
    <Box as="header" bg="secondary" className="header">
      <Flex maxW="1200px" mx="auto" className="container">
        {search && <SearchForm />}

        <SiteBranding title={title} />

        <Menu menuName={menuName} />
        <Button colorScheme="pink">Button</Button>
      </Flex>
    </Box>
  )
}
