/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Layout from '../Layout.js'
import { PostEntryFull } from '../post'
import { Seo } from '../seo'

const Post = props => {
  const {
    post: { title, excerpt, featuredImage, uri },
  } = props
  const media = featuredImage
    ? featuredImage.localFile.childImageSharp.fluid.src
    : null

  return (
    <>
      <Layout useContainer={false}>
        <Seo
          title={title}
          description={excerpt}
          media={media}
          ogType="article"
          ogUrl={uri}
        />
        <PostEntryFull {...props} />
      </Layout>
    </>
  )
}

export default Post
