import React from 'react'
import { Layout } from '../components'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'
import { Container } from 'starterUiComponents'
import { chakra } from '@chakra-ui/react'

const NotFoundPage = ({ location }) => (
  <Layout location={{ location }} page="404">
    <Seo title="404: Not found" />
    <article>
      <Container className="text-center">
        <chakra.h1
          border="10px double"
          borderColor="primary"
          display="inline-block"
          className="px-10 py-6 mb-10"
        >
          404
        </chakra.h1>
        <div className="text-sm font-bold tracking-wider uppercase entry-content">
          <p>That page can't be found.</p>
          <p>It looks like nothing was found at this location.</p>
        </div>
      </Container>
    </article>
  </Layout>
)

export default NotFoundPage
