/** @jsx jsx */
import { jsx } from '@emotion/react'
import Layout from '../Layout'
import ParsedContent from '../../utils/ParsedContent'
import { ActivatePageScripts } from '../../utils/'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'
import { pageStyles } from '../../styles/'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

const Page = (props) => {
  const { page, ctx } = props
  const { skipTitle } = useThemeOptions()
  const { content, title, uri, slug } = page
  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp.original

  return (
    <Layout useContainer={false}>
      <Seo
        isFrontPage={page.isFrontPage}
        title={title}
        uri={uri}
        yoastSeo={ctx.yoastSeo}
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
          <h1 className="text-center display-3 py-3 py-lg-5">
            <span
              className="page-title-value"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </h1>
        )}
        <div className="entry-content" css={pageStyles}>
          <ActivatePageScripts />
          <ParsedContent content={content} />
        </div>
      </article>
    </Layout>
  )
}

export default Page
