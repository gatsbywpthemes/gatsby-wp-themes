import React from 'react'
import { Heading, Flex, useColorModeValue as colorMode } from '@chakra-ui/react'

import { TaxonomyItem } from 'baseComponents'

export const Taxonomies = ({ post, taxName, singularName, ...props }) => {
  const taxonomies = post[taxName].nodes

  return (
    taxonomies.length > 0 && (
      <Flex wrap="wrap" align="center" my={5}>
        <Heading
          as="h3"
          fontFamily="body"
          borderRadius="md"
          fontSize="sm"
          fontStyle="italic"
          fontWeight="normal"
          lineHeight="shorter"
          bg={colorMode('infoBg', 'modes.dark.infoBg')}
          color={colorMode('text', 'modes.dark.infoColor')}
          px={4}
          py={2}
          mr={4}
          mb={[3, 0]}
          textTransform="capitalize"
        >
          {taxonomies.length > 1 ? `${taxName} : ` : `${singularName} : `}
        </Heading>
        <Flex wrap="wrap" {...props}>
          {taxonomies.map((cat) => (
            <TaxonomyItem key={cat.slug} taxName="category" item={cat} />
          ))}
        </Flex>
      </Flex>
    )
  )
}
