import React from "react"
import { Flex } from "@chakra-ui/react"
import { Container } from "baseUiComponents"
import { Layout, PostEntry, Sidebar, Comments } from "baseComponents"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"

import { useLayoutStyles } from "baseUtils/hooks"

const Post = ({ post, ctx }) => {
  const { title, uri, headlesswp } = post

  const pageTemplate = headlesswp?.pageTemplate || "default"
  const featuredImage =
    post.featuredImage?.node.localFile.childImageSharp.original
  const {
    containerStyles,
    sidebarSide,
    sidebarPage,
    sidebarWidgets,
  } = useLayoutStyles("post", pageTemplate)
  return (
    <Layout page={post} type="post">
      <Seo
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
          <PostEntry post={post} location="single" ctx={ctx} isFirst={true} />
          {sidebarPage && <Sidebar widgets={sidebarWidgets} />}
        </Flex>
        <Comments post={post} />
      </Container>
    </Layout>
  )
}

export default Post
