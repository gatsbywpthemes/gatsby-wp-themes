/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../Layout'
import ParsedContent from '../../utils/ParsedContent'
import { ActivatePageScripts } from '../../utils/'
import { SeoSingle } from 'gatsby-plugin-wp-seo'
import { pageStyles, pageTitleStyles } from '../../styles/'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

const Page = (props) => {
  const { page, ctx } = props
  const { skipTitle } = useThemeOptions()
  const { content, title, uri, slug } = page
  const featuredImage = page.featuredImage?.node.localFile.childImageSharp.fluid

  return (
    <Layout useContainer={false}>
      <SeoSingle
        isFrontPage={page.isFrontPage}
        title={title}
        uri={uri}
        seo={ctx.seo}
        featuredImage={
          featuredImage && {
            src: featuredImage.src,
            width: featuredImage.width,
            height: featuredImage.height,
          }
        }
      />
      <article>
        {skipTitle.indexOf(slug) === -1 && (
          <h1 sx={pageTitleStyles}>
            <span
              className="page-title-value"
              dangerouslySetInnerHTML={{ __html: title }}
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
