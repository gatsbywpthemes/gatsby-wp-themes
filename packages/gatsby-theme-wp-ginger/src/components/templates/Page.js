/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../Layout'
import ParsedContent from '../../utils/ParsedContent'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import SEO from '../seo/Seo'

const Page = ({ page }) => {
  const { content } = page
  const { staticHomePagePath } = useThemeOptions()
  const ogType =
    !!staticHomePagePath && page.uri === staticHomePagePath
      ? 'website'
      : 'article'

  return (
    <Layout useContainer={false}>
      <SEO
        title={page.title}
        description={page.excerpt}
        ogType={ogType}
        ogUrl={ogType === 'website' ? '' : page.uri}
      />
      <article sx={{ pt: '4rem' }}>
        <h1
          sx={{ variant: 'title.page' }}
          dangerouslySetInnerHTML={{ __html: page.title }}
        />
        <div className="entry-content" sx={{ variant: 'article.page' }}>
          <ParsedContent content={content} />
        </div>
      </article>
    </Layout>
  )
}

export default Page
