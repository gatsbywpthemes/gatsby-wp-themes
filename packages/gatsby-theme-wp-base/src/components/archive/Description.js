import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Card } from 'baseUiComponents'

export const Description = ({ description, ...props }) => {
  return (
    <Flex justify="center">
      <Card
        dangerouslySetInnerHTML={{ __html: description }}
        mb={10}
        {...props}
      />
    </Flex>
  )
}
