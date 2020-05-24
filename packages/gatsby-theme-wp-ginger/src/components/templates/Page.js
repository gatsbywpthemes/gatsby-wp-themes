/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../Layout'
import ParsedContent from '../../utils/ParsedContent'
import { ActivatePageScripts } from '../../utils/'
import { Seo } from '../seo'
import { pageStyles, pageTitleStyles } from '../../styles/'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

const Page = ({ page }) => {
  const { skipTitle } = useThemeOptions()
  const { content } = page
  const ogType = page.isFrontPage ? 'website' : 'article'
  return (
    <Layout useContainer={false}>
      <Seo
        title={page.title}
        description={page.excerpt}
        ogType={ogType}
        ogUrl={ogType === 'website' ? '/' : page.uri}
      />
      <article>
        {skipTitle.indexOf(page.slug) === -1 && (
          <h1 sx={pageTitleStyles}>
            <span
              className="page-title-value"
              dangerouslySetInnerHTML={{ __html: page.title }}
            />
          </h1>
        )}
        <div className="entry-content" sx={pageStyles}>
          <ActivatePageScripts />
          <ParsedContent content={content} />
        </div>
      </article>
    </Layout>
  )
}

export default Page
