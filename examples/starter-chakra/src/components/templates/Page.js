/** @jsx jsx */
import { jsx, Flex } from '@chakra-ui/core'
import { Container } from 'uiComponents'
import { Layout } from '../Layout'
import ParsedContent from 'utils/ParsedContent'
import { ActivatePageScripts } from 'utils'
import { useLayoutStyles } from 'utils/hooks'

import { Seo } from 'gatsby-plugin-wp-seo'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
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
  const {
    containerStyles,
    sidebarSide,
    sidebarPage,
    sidebarWidgets,
  } = useLayoutStyles('post', templateName.toLowerCase())
  const { skipTitle } = useThemeOptions()

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
      <Container className="mainContainer" sx={{ ...containerStyles }}>
        <Flex
          sx={{
            ...sidebarSide,
            flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
            alignItems: `flex-start`,
          }}
        >
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
        </Flex>
      </Container>
    </Layout>
  )
}

export default Page
