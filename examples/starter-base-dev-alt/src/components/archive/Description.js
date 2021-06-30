import React from 'react'
import { Box, useColorModeValue as colorMode, Flex } from '@chakra-ui/react'
import { Card } from 'baseUiComponents'

export const Description = ({ description, ...props }) => {
  return (
    <Flex justify="center">
      <Card
        dangerouslySetInnerHTML={{ __html: description }}
        mb={10}
        // maxWidth={700}
        // bg={colorMode('cardBg', 'modes.dark.cardBg')}
        // p={10}
        // borderRadius={10}
        {...props}
      />
    </Flex>
  )
}
