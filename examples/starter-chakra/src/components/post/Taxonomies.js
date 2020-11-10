/** @jsx jsx */
import {
  jsx,
  Heading,
  Flex,
  useColorModeValue as colorMode,
} from '@chakra-ui/core'
import React from 'react'
import { TaxonomyItem } from './index'

export const Taxonomies = ({ post, taxName, singularName, ...props }) => {
  const taxonomies = post[taxName].nodes
  const bgColor = colorMode('light', 'dark')
  return (
    taxonomies.length > 0 && (
      <Flex align="center" my={5}>
        <Heading
          as="h3"
          layerStyle="info"
          mr={4}
          bg={bgColor}
          textTransform="capitalize"
        >
          {taxonomies.length > 1 ? `${taxName} : ` : `${singularName} : `}
        </Heading>
        <Flex {...props}>
          {taxonomies.map((cat) => (
            <TaxonomyItem key={cat.slug} taxName="category" item={cat} />
          ))}
        </Flex>
      </Flex>
    )
  )
}
