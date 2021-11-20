import React from 'react'
import { Flex } from '@chakra-ui/react'
export const Form = (props) => {
  const { children, ...rest } = props
  return (
    <Flex
      as="form"
      wrap="wrap"
      justify="space-between"
      boxShadow="0 20px 40px rgba(0,0,0,.4)"
      p={['4', '8']}
      sx={{
        '.comment &': {
          boxShadow: 'none',
        },
      }}
      {...rest}
    >
      {children}
    </Flex>
  )
}
