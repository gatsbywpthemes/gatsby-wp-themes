/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/Layout'
import { SeoSingle } from 'gatsby-plugin-wp-seo'
import { pageTitleStyles, page404Styles } from '../styles'

const NotFoundPage = ({ location }) => (
  <Layout location={{ location }}>
    <SeoSingle page={{ title: '404: Not found' }} />
    <article sx={page404Styles}>
      <h1 sx={pageTitleStyles}>
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
