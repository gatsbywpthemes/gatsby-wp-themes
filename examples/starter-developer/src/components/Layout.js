import React from 'react'
import { Footer, Header } from 'starterComponents'
import { Box, Flex } from '@chakra-ui/react'
import Headroom from 'react-headroom'
import 'starterStyles/wp-styles/styles.scss'

export const Layout = ({ children, page, type = 'page', ...props }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ''
  const pageTemplate = page?.template
    ? page.template.templateName.toLowerCase()
    : ''

  const fullWidthClass = pageTemplate === 'full width' ? 'fullWidth' : ''
  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      sx={{
        '&.fullWidth': {
          '.mainContainer': {
            maxWidth: `100%`,
            px: 0,
          },
        },
      }}
      className={`${layoutClass}-${type} ${fullWidthClass}`}
      {...props}
    >
      <Box as={Headroom} sx={{ '&>div': { zIndex: '2!important' } }}>
        <Header />
      </Box>
      <Box
        as="main"
        flex={1}
        py={16}
        sx={{
          '.fullWidth &': {
            py: 0,
            // mt: '-32px',
          },
        }}
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}
