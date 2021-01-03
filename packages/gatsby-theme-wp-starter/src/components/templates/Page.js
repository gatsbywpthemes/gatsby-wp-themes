import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { Container, Card } from 'starterUiComponents'
import { Layout, Sidebar } from 'starterComponents'
import { ActivatePageScripts } from 'starterUtils'
import { useLayoutStyles } from 'starterUtils/hooks'
import ParsedContent from 'starterUtils/ParsedContent'
import { getElementorCssLinksData } from 'starterUtils/elementor'
import { Helmet } from 'react-helmet'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { gutenbergStyles } from 'starterStyles/gutenbergStyles'

const Page = ({ page, ctx }) => {
  console.log('page', page, 'context', ctx)
  const {
    title,
    isFrontPage,
    content,
    slug,
    uri,
    databaseId,
    template: { templateName },
  } = page
  const {
    containerStyles,
    sidebarSide,
    sidebarPage,
    sidebarWidgets,
  } = useLayoutStyles('page', templateName.toLowerCase())
  const { skipTitle } = useThemeOptions()
  console.log('template', templateName)
  const elementorCssLinksData = getElementorCssLinksData(databaseId)

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
      <Helmet>
        {elementorCssLinksData.length &&
          elementorCssLinksData.map((linkData) => (
            <link
              key={linkData?.id}
              rel="stylesheet"
              id={linkData?.id}
              href={linkData?.link}
              media="all"
            />
          ))}
      </Helmet>
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
              sx={
                templateName === 'Full Width' && {
                  p: 0,
                  borderRadius: 0,
                  boxShadow: 0,
                }
              }
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

              <Box className="entry-content" sx={{ ...gutenbergStyles }}>
                <ActivatePageScripts />
                <ParsedContent content={content} />
              </Box>
            </Card>
          </article>
          {sidebarPage && <Sidebar widgets={sidebarWidgets} />}
        </Flex>
      </Container>
    </Layout>
  )
}

export default Page
