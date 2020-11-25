import React from 'react'
import Layout from '../components/Layout'
import { Seo } from 'gatsby-plugin-wp-seo'

const NotFoundPage = ({ location }) => (
  <Layout location={{ location }} is404={true}>
    <Seo title="404: Not found" />
    <article>
      <h1 className="display-2">404</h1>
      <div className="entry-content">
        <p className="lead">That page can't be found.</p>
        <p>It looks like nothing was found at this location.</p>
      </div>
    </article>
  </Layout>
)

export default NotFoundPage
