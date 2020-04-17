/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/Layout'
import SEO from '../components/seo/Seo'
import { page404 } from '../styles/page404'
import pageTitle from '../styles/pageTitle'

const NotFoundPage = ({ location }) => (
  <Layout location={{ location }}>
    <SEO title="404: Not found" />
    <article sx={page404}>
      <h1 sx={pageTitle}>
        <span className="page-title-value">404</span>
      </h1>
      <div className="entry-content">
        <p>That page can't be found.</p>
        <p>It looks like nothing was found at this location.</p>
      </div>
    </article>
  </Layout>
)

export default NotFoundPage
