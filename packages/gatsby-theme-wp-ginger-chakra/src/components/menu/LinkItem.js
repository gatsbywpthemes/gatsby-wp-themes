import React from 'react'
import URIParser from 'urijs'
import slashes from 'remove-trailing-slash'
import { Link as GatsbyLink } from 'gatsby'
import { createLocalLink } from '../../utils'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { Box, chakra } from '@chakra-ui/react'

export const LinkItem = ({ menuItem }) => {
  const { wordPressUrl } = useThemeOptions()
  let url = menuItem.url
  const parsedUrl = new URIParser(url)
  if (parsedUrl.is('absolute')) {
    const targetRelAttrs =
      menuItem.target === '_blank'
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {}
    return (
      <chakra.a textStyle="specialLink" href={menuItem.url} {...targetRelAttrs}>
        {menuItem.label}
      </chakra.a>
    )
  } else {
    return menuItem.url !== '#' ? (
      menuItem.url === wordPressUrl ? (
        <Box
          as={GatsbyLink}
          textStyle="specialLink"
          to="/"
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
        />
      ) : (
        <Box
          as={GatsbyLink}
          textStyle="specialLink"
          fontWeight="bold"
          to={createLocalLink(menuItem.url, slashes(wordPressUrl))}
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
        />
      )
    ) : (
      <chakra.span textStyle="specialLink">{menuItem.label}</chakra.span>
    )
  }
}
