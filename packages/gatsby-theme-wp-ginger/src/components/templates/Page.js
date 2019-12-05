/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../Layout'
import ParsedContent from '../../utils/ParsedContent'
import SEO from '../seo/Seo'
import pageStyles from '../../styles/page'

const Page = ({ page }) => {
  const { content } = page
  const ogType = page.isFrontPage ? 'website' : 'article'
  console.log(pageStyles)
  return (
    <Layout useContainer={false}>
      <SEO
        title={page.title}
        description={page.excerpt}
        ogType={ogType}
        ogUrl={ogType === 'website' ? '' : page.uri}
      />
      <article sx={{ pt: '4rem' }}>
        <h1 sx={{ variant: 'special.Title' }}>
          <span
            className="page-title-value"
            dangerouslySetInnerHTML={{ __html: page.title }}
          />
        </h1>
        <div className="entry-content" sx={pageStyles}>
          <ParsedContent content={content} />
        </div>
      </article>
    </Layout>
  )
}

export default Page
