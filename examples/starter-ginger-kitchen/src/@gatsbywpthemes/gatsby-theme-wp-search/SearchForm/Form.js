import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Box, Flex } from '@chakra-ui/react'
import { SubmitButton } from '@gatsbywpthemes/gatsby-theme-wp-search/src/SearchForm/SubmitButton'

export const Form = (props) => {
  const { children, ...rest } = props
  return (
    <Box position="relative" mb="6">
      <Box as={FiSearch} position="absolute" top="0" bottom="0" my="auto" />
      <Flex as="form" {...rest}>
        <Box position="relative" w="full">
          {children}
        </Box>
        <SubmitButton />
      </Flex>
    </Box>
  )
}
