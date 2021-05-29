import React from 'react'
import { Layout } from '../components'
import { Box, chakra, Heading, useColorModeValue } from '@chakra-ui/react'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'

const NotFoundPage = () => (
  <Layout location="page" page="404">
    <Seo title="404: Not found" />
    <chakra.article textAlign="center">
      <Heading
        as="h1"
        display="inline-block"
        px={10}
        py={6}
        mb={10}
        border="8px double"
        borderColor={useColorModeValue('accent', 'modes.dark.accent')}
      >
        404
      </Heading>
      <Box
        fontSize="sm"
        fontWeight="bold"
        letterSpacing="wider"
        textTransform="uppercase"
        className="entry-content"
      >
        <p>That page can't be found.</p>
        <p>It looks like nothing was found at this location.</p>
      </Box>
    </chakra.article>
  </Layout>
)

export default NotFoundPage
