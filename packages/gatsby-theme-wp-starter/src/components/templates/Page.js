import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'
import { Container, Card } from 'starterUiComponents'
import { Layout, Sidebar } from 'starterComponents'
import { ActivatePageScripts } from 'starterUtils'
import { useLayoutStyles } from 'starterUtils/hooks'
import ParsedContent from 'starterUtils/ParsedContent'

import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
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
  console.log('template', templateName)

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
                skipTitle !== 'all' &&
                templateName !== 'Full Width' && (
                  <Heading
                    as="h1"
                    marginBottom={10}
                    textTransform="uppercase"
                    fontSize="3xl"
                    textAlign="center"
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
