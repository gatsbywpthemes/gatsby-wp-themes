/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../Layout'
import ParsedContent from '../../utils/ParsedContent'
import { ActivatePageScripts } from '../../utils/'
import { SeoSingle } from 'gatsby-plugin-wp-seo'
import { pageStyles, pageTitleStyles } from '../../styles/'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

const Page = ({ page }) => {
  const { skipTitle } = useThemeOptions()
  const { content, ...rest } = page
  return (
    <Layout useContainer={false}>
      <SeoSingle page={rest} />
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
