/** @jsx jsx */
import { Footer, Header } from 'starterComponents'
import { Box, jsx } from '@chakra-ui/react'
import Headroom from 'react-headroom'
import 'starterStyles/wp-styles/styles.scss'

export const Layout = ({ children, page, type = 'page' }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ''
  const pageTemplate = page && page.template ? page.template.__typename : ''

  const fullWidthClass =
    pageTemplate === 'WpFullWidthTemplate' ? 'fullWidth' : ''
  return (
    <Box
      sx={{
        '&.fullWidth': {
          '.mainContainer': {
            maxWidth: `100%`,
            px: 0,
          },
        },
      }}
      className={`${layoutClass}-${type} ${fullWidthClass}`}
    >
      <Headroom>
        <Header />
      </Headroom>
      <Box
        as="main"
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
    </Box>
  )
}
