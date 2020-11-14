/** @jsx jsx */
import { jsx, Center } from '@chakra-ui/react'

export const FooterContent = (props) => {
  return (
    <Center {...props}>
      © {new Date().getFullYear()} | Built with{`  `}
      <a href="https://www.wpgraphql.com">WPGraphQL</a> and{`  `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Center>
  )
}
