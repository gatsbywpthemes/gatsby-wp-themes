import React from "react"
import { Container, Card } from "baseUiComponents"
import { Layout, Sidebar } from "baseComponents"
import { ActivatePageScripts } from "baseUtils"

import ParsedContent from "baseUtils/ParsedContent"

import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { gutenbergStyles } from "baseStyles/gutenbergStyles"

const Page = ({ page, ctx }) => {
  const { title, isFrontPage, content, uri, headlesswp } = page
  const pageTemplate = headlesswp?.pageTemplate || "default"
  const skipTitle = headlesswp?.skipTitle || false

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
      <Container className="mainContainer">
        <div
          className="flex"
          css={{
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
                <h1
                  className="mb-10 text-3xl text-center uppercase page-title"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}

              <div
                className="entry-content"
                css={{
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
              </div>
            </Card>
          </article>
        </div>
      </Container>
    </Layout>
  )
}

export default Page
