import React from "react"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"

import { Layout } from "../../components/Layout"

const Post = ({ post, ctx }) => {
  const { title, uri, headlesswp, content } = post

  const pageTemplate = headlesswp?.pageTemplate || "default"
  const featuredImage =
    post.featuredImage?.node.localFile.childImageSharp.original

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
      <div className="container mainContainer">
        <div
          className="flex"
          css={{
            flexWrap: { base: "wrap", lg: "nowrap" },
            alignItems: `flex-start`,
          }}
        >
          {/* <PostEntry post={post} location="single" ctx={ctx} isFirst={true} /> */}
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </Layout>
  )
}

export default Post
