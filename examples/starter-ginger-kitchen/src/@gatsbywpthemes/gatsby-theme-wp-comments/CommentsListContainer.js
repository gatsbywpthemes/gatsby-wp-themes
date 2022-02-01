import { Box } from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/react'
import React from 'react'

export const CommentsListContainer = ({ children }) => {
  return (
    <section>
      <Box as="h2" mb="6" textAlign="center">
        Comments
      </Box>
      <chakra.ul
        mb={12}
        p={0}
        sx={{ ul: { ml: 6, p: 0 }, li: { listStyle: 'none', mb: 6 } }}
      >
        {children}
      </chakra.ul>
    </section>
  )
}
