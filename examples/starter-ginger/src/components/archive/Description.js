import React from 'react'
import { Box } from '@chakra-ui/react'

export const Description = ({ description }) => {
  return (
    <Box
      textAlign="center"
      mb="10"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  )
}
