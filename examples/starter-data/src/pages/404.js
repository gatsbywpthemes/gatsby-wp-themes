/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/Layout'
import SEO from '../components/seo/Seo'

const NotFoundPage = ({ location }) => (
  <Layout location={{ location }}>
    <SEO title="404: Not found" />
    <article sx={{ variant: 'page404' }}>
      <h1 sx={{ variant: 'title.page' }}>404</h1>
      <div className="entry-content">
        <p>That page can't be found.</p>
        <p>It looks like nothing was found at this location.</p>
      </div>
    </article>
  </Layout>
)

export default NotFoundPage