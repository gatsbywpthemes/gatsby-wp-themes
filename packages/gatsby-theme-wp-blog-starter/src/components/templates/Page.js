/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import { Layout } from '../Layout'

import { ActivatePageScripts, useLayoutStyles } from '../../utils/'
import { Seo } from 'gatsby-plugin-wp-seo'

import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { Sidebar } from '../index'
import { gutenbergStyles, articleStyles } from '../../styles'

const Page = ({ page, ctx }) => {
  const {
    title,
    isFrontPage,
    content,
    slug,
    uri,
    template: { templateName },
  } = page

  const { skipTitle } = useThemeOptions()

  const {
    containerStyles,
    sidebarSide,
    sidebarPage,
    sidebarWidgets,
  } = useLayoutStyles('page', templateName)

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
      <Container sx={{ ...containerStyles }} className="mainContainer">
        <Flex
          sx={{
            ...sidebarSide,
            flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
            alignItems: `flex-start`,
          }}
        >
          <article
            sx={{
              ...articleStyles,
              width: `100%`,
              borderBottom: `none`,
            }}
            className="entry"
          >
            <div className="content page-content" sx={{ borderRadius: `s` }}>
              {skipTitle &&
                !skipTitle.includes(slug) &&
                skipTitle !== 'all' && (
                  <h1
                    className="page-title"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                )}

              <Box className="entry-content" sx={{ ...gutenbergStyles }}>
                <ActivatePageScripts />
                {/* <ParsedContent content={content} /> */}
                <Box dangerouslySetInnerHTML={{ __html: content }} />
              </Box>
            </div>
          </article>
          {sidebarPage && <Sidebar widgets={sidebarWidgets} />}
        </Flex>
      </Container>
    </Layout>
  )
}

export default Page
