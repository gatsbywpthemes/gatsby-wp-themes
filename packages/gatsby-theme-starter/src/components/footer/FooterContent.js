import React from 'react'
import { Box, Link } from '@chakra-ui/react'

export const FooterContent = (props) => {
  return (
    <Box textAlign="center" {...props}>
      © {new Date().getFullYear()} | Built with{`   `}
      <Link href="https://www.wpgraphql.com">WPGraphQL</Link> and{`  `}
      <Link href="https://www.gatsbyjs.org">Gatsby</Link>
    </Box>
  )
}
