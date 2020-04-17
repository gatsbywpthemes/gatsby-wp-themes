/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../Layout'
import ParsedContent from '../../utils/ParsedContent'
import SEO from '../seo/Seo'
import pageStyles from '../../styles/page'
import pageTitle from '../../styles/pageTitle'
import useThemeOptions from 'gatsby-theme-blog-data-v4/src/hooks/useThemeOptions'

const Page = ({ page }) => {
  const { skipTitle } = useThemeOptions()
  console.log(skipTitle)
  const { content } = page
  const ogType = page.isFrontPage ? 'website' : 'article'
  console.log(page)
  return (
    <Layout useContainer={false}>
      <SEO
        title={page.title}
        description={page.excerpt}
        ogType={ogType}
        ogUrl={ogType === 'website' ? '' : page.uri}
      />
      <article>
        {skipTitle.indexOf(page.slug) === -1 && (
          <h1 sx={pageTitle}>
            <span
              className="page-title-value"
              dangerouslySetInnerHTML={{ __html: page.title }}
            />
          </h1>
        )}
        <div className="entry-content" sx={pageStyles}>
          <ParsedContent content={content} />
        </div>
      </article>
    </Layout>
  )
}

export default Page
