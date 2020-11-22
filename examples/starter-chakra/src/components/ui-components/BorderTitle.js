import React from 'react'
import { Flex } from '@chakra-ui/react'

export const BorderTitle = (props) => (
  <Flex
    justify="center"
    align="center"
    textAlign="center"
    textTransform="uppercase"
    letterSpacing="2px"
    fontSize="lg"
    sx={{
      ':after, :before': {
        content: '""',
        height: '1px',
        borderTop: '1px solid',
        flex: '1 0',
      },
      ':after': {
        ml: 4,
      },
      ':before': {
        mr: 4,
      },
    }}
    {...props}
  />
)
