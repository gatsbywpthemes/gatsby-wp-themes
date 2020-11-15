import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { Container, Card } from 'starterUiComponents'
import { Layout, Sidebar } from 'starterComponents'
import ParsedContent from 'starterUtils/ParsedContent'
import { ActivatePageScripts } from 'starterUtils'
import { useLayoutStyles } from 'starterUtils/hooks'

import { Seo } from 'gatsby-plugin-wp-seo'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { gutenbergStyles } from 'starterStyles/gutenbergStyles'

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
  } = useLayoutStyles('page', templateName.toLowerCase())
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
            flexWrap: { base: 'wrap', lg: 'nowrap' },
            alignItems: `flex-start`,
          }}
        >
          <article className="entry">
            <Card
              className="content page-content"
              p={templateName === 'Full Width' ? 0 : [5, 16]}
              borderRadius={templateName === 'Full Width' ? 0 : 'lg'}
              boxShadow={templateName === 'Full Width' ? 0 : 'lg'}
              mb={{ base: 14, lg: 0 }}
            >
              {skipTitle &&
                !skipTitle.includes(slug) &&
                skipTitle !== 'all' && (
                  <h1
                    className="page-title"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                )}

              <div className="entry-content" sx={{ ...gutenbergStyles }}>
                <ActivatePageScripts />
                <ParsedContent content={content} />
              </div>
            </Card>
          </article>
          {sidebarPage && <Sidebar widgets={sidebarWidgets} />}
        </Flex>
      </Container>
    </Layout>
  )
}

export default Page
