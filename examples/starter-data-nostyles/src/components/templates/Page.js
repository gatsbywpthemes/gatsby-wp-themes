import React from 'react'
import { Layout } from '../Layout'
import ParsedContent from '../../utils/ParsedContent'
import { ActivatePageScripts } from '../../utils/'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { Sidebar } from '../index'

const Page = ({ page, ctx }) => {
  const {
    title,
    isFrontPage,
    content,
    slug,
    uri,
    template: { templateName },
  } = page
  const pageTemplate = templateName.toLowerCase()
  const { skipTitle, sidebarWidgets } = useThemeOptions()

  const sidebarPage = pageTemplate?.includes('sidebar')
  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp.original
  return (
    <Layout page={page} type="page">
      <Seo
        isFrontPage={isFrontPage}
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
      <div className="mainContainer">
        <div>
          <article className="entry">
            <div className="content page-content">
              {skipTitle &&
                !skipTitle.includes(slug) &&
                skipTitle !== 'all' && (
                  <h1
                    className="page-title"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                )}

              <div className="entry-content">
                <ActivatePageScripts />
                <ParsedContent content={content} />
              </div>
            </div>
          </article>
          {sidebarPage && <Sidebar widgets={sidebarWidgets} />}
        </div>
      </div>
    </Layout>
  )
}

export default Page
