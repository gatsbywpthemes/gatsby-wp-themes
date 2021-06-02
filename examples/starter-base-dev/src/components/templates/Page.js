import React from "react"
import { Flex, Box, Heading } from "@chakra-ui/react"
import { Container, Card } from "baseUiComponents"
import { Layout, Sidebar } from "baseComponents"
import { ActivatePageScripts } from "baseUtils"
import { useLayoutStyles } from "baseUtils/hooks"
import ParsedContent from "baseUtils/ParsedContent"

import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { gutenbergStyles } from "baseStyles/gutenbergStyles"

const Page = ({ page, ctx }) => {
  const { title, isFrontPage, content, uri, headlesswp } = page
  const pageTemplate = headlesswp?.pageTemplate || "default"
  const skipTitle = headlesswp?.skipTitle || false
  const { containerStyles, sidebarSide, sidebarPage, sidebarWidgets } =
    useLayoutStyles("page", pageTemplate)

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
            flexWrap: { base: "wrap", lg: "nowrap" },
            alignItems: `flex-start`,
          }}
        >
          <article className="entry">
            <Card
              className="content page-content"
              sx={
                pageTemplate === "full width" && {
                  p: 0,
                  borderRadius: 0,
                  boxShadow: 0,
                }
              }
              mb={{ base: 14, lg: 0 }}
            >
              {!skipTitle && pageTemplate !== "full width" && (
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

              <Box
                className="entry-content"
                sx={{
                  ...gutenbergStyles,
                  "&:after": {
                    clear: "both",
                    content: "''",
                    display: "block",
                  },
                }}
              >
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
