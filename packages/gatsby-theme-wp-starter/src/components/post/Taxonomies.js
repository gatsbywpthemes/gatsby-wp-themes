/** @jsx jsx */
import {
  jsx,
  Heading,
  Flex,
  useColorModeValue as colorMode,
} from '@chakra-ui/react'

import { TaxonomyItem } from 'starterComponents'

export const Taxonomies = ({ post, taxName, singularName, ...props }) => {
  const taxonomies = post[taxName].nodes
  const bgColor = colorMode('light', 'dark')
  return (
    taxonomies.length > 0 && (
      <Flex wrap="wrap" align="center" my={5}>
        <Heading
          as="h3"
          layerStyle="info"
          bg={colorMode('light', 'gray.800')}
          px={5}
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
