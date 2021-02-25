import React from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
import { Layout } from 'gingerThemeComponents'
import { ParsedContent, ActivatePageScripts } from 'gingerThemeUtils'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'
import { gutenberg } from 'gingerThemeStyles'

const Page = (props) => {
  const { page, ctx } = props
  const {
    content,
    title,
    uri,
    headlesswp: { skipTitle },
  } = page
  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp.original
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
      <article data-sal="fade" data-sal-duration="1000" data-sal-easing="ease">
        {!skipTitle && (
          <Box as="h1" textStyle="h1Archive">
            <span
              className="page-title-value"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </Box>
        )}
        <Box
          className="entry-content"
          sx={{
            ...gutenberg,
            '.has-background:not(.has-text-color),.wp-block-media-text[style*="background"],.wp-block-table.is-style-stripes tbody tr:nth-of-type(odd)': {
              backgroundImage: (theme) => {
                return colorMode === 'dark'
                  ? `linear-gradient(${theme.colors.modes.dark.overlay}, ${theme.colors.modes.dark.overlay})`
                  : `linear-gradient(${theme.colors.overlay}, ${theme.colors.overlay})`
              },
              backgroundBlendMode: 'multiply',
            },
          }}
        >
          <ActivatePageScripts />
          <ParsedContent content={content} />
        </Box>
      </article>
    </Layout>
  )
}

export default Page
