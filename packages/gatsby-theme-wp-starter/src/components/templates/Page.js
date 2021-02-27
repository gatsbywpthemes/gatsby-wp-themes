import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'
import { Container, Card } from 'starterUiComponents'
import { Layout, Sidebar } from 'starterComponents'
import { ActivatePageScripts } from 'starterUtils'
import { useLayoutStyles } from 'starterUtils/hooks'
import ParsedContent from 'starterUtils/ParsedContent'

import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'

import { gutenbergStyles } from 'starterStyles/gutenbergStyles'

const Page = ({ page, ctx }) => {
  const {
    title,
    isFrontPage,
    content,
    slug,
    uri,
    headlesswp: { pageTemplate, skipTitle },
  } = page
  const {
    containerStyles,
    sidebarSide,
    sidebarPage,
    sidebarWidgets,
  } = useLayoutStyles('page', pageTemplate.toLowerCase())

  console.log('template', pageTemplate)

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
                pageTemplate === 'full width' && {
                  p: 0,
                  borderRadius: 0,
                  boxShadow: 0,
                }
              }
              mb={{ base: 14, lg: 0 }}
            >
              {!skipTitle && pageTemplate !== 'full width' && (
                <h1
                  className="mb-10 text-3xl font-bold text-center uppercase page-title"
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
