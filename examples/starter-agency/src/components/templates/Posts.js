import React from "react"
import { Layout } from "~/components/Layout"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-wp-data/src/hooks"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { PostsList } from "~/components/archive/PostsList"

const Posts = ({ posts, ctx }) => {
  const { humanPageNumber, numberOfPages, title, yoastSeo, seo } = ctx
  const { postsPath } = useThemeOptions()

  return (
    <Layout page="blog">
      <Seo
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        title={title}
        uri={postsPath}
        yoastSeo={yoastSeo}
        seo={seo}
      />
      <PostsList posts={posts} />
    </Layout>
  )
}

export default Posts
