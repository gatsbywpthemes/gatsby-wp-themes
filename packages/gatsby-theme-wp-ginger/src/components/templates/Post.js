/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Layout from '../Layout.js'
import PostEntry from '../post/full/PostEntry'
import SEO from '../seo/Seo'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import normalize from 'normalize-path'

const Post = props => {
  const {
    post: { title, excerpt, featuredImage, uri },
  } = props
  const { postsPrefix } = useThemeOptions()
  const media = featuredImage
    ? featuredImage.imageFile.childImageSharp.fluid.src
    : null

  return (
    <>
      <Layout
        useContainer={false}
        relativeUrl={normalize(`/${postsPrefix}/${uri}`)}
      >
        <SEO
          title={title}
          description={excerpt}
          media={media}
          ogType="article"
          ogUrl={normalize(`/${postsPrefix}/${uri}`)}
        />
        <PostEntry {...props} />
      </Layout>
    </>
  )
}

export default Post
