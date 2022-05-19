import React from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
import { Layout } from 'gingerThemeComponents'
import { ParsedContent, ActivatePageScripts } from 'gingerThemeUtils'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'
import { gutenbergStyles } from 'gingerThemeStyles'

const Page = (props) => {
  const { page, ctx } = props
  const { content, title, uri, headlesswp } = page
  const skipTitle = headlesswp?.skipTitle || false
  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp?.original
  const { colorMode } = useColorMode()

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
      <main>
        <article data-sal="fade" data-sal-duration="600" data-sal-easing="ease">
          {!skipTitle && (
            <Box as="h1" textStyle="h1Archive">
              <span
                className="page-title-value"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Box>
          )}
          <Box className="entry-content" sx={gutenbergStyles({ colorMode })}>
            <ActivatePageScripts />
            <ParsedContent content={content} />
          </Box>
        </article>
      </main>
    </Layout>
  )
}

export default Page
