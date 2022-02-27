import React from "react"
import { Layout } from "~/components/Layout"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-wp-data/src/hooks"
import { Comments } from "@gatsbywpthemes/gatsby-theme-wp-comments/src"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { ParsedContent, ActivatePageScripts } from "~/utils"

const Post = ({ post, ctx }) => {
  const { title, content, uri, headlesswp } = post
  const featuredImage =
    post.featuredImage?.node.localFile.childImageSharp?.original
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

      <article>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div className="content">
          <ActivatePageScripts />
          <ParsedContent content={post.content} />
        </div>
      </article>
      <Comments post={post} />
    </Layout>
  )
}

export default Post
