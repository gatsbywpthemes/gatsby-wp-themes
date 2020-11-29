import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { Seo } from 'gatsby-plugin-wp-seo'

const NotFoundPage = ({ location }) => (
  <Layout location={{ location }}>
    <Seo title="404: Not found" />
    <Flex
      as="article"
      direction="column"
      justify="center"
      align="center"
      sx={{
        minHeight: (theme) => [
          `calc(100vh - ${parseInt(theme.sizes.header[0]) + 4.625 + 3}rem)`,
          `calc(100vh - ${parseInt(theme.sizes.header[1]) + 4.625 + 4}rem)`,
          'calc(100vh - 6.5rem)',
        ],
      }}
    >
      <Box as="h1" textStyle="h1Archive" fontSize="6xl">
        <span className="page-title-value">404</span>
      </Box>
      <Box className="entry-content" textAlign="center">
        <p>That page can't be found.</p>
        <p>It looks like nothing was found at this location.</p>
      </Box>
    </Flex>
  </Layout>
)

export default NotFoundPage
