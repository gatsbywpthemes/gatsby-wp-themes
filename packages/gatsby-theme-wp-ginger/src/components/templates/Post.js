/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Layout from '../Layout.js'
import PostEntry from '../post/full/PostEntry'
import SEO from '../seo/Seo'
import normalize from 'normalize-path'

const Post = props => {
  const {
    post: { title, excerpt, featuredImage, uri },
  } = props
  const media = featuredImage
    ? featuredImage.remoteFile.childImageSharp.fluid.src
    : null

  return (
    <>
      <Layout useContainer={false}>
        <SEO
          title={title}
          description={excerpt}
          media={media}
          ogType="article"
          ogUrl={normalize(`/${uri}`)}
        />
        <PostEntry {...props} />
      </Layout>
    </>
  )
}

export default Post
