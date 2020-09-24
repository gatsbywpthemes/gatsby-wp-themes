/** @jsx jsx */
import { jsx } from 'theme-ui'

import Layout from '../Layout.js'
import { PostEntryFull } from '../post'
import { SeoSingle } from 'gatsby-plugin-wp-seo'

const Post = (props) => {
  const { post } = props
  return (
    <Layout useContainer={false}>
      <SeoSingle page={post} />
      <PostEntryFull {...props} />
    </Layout>
  )
}

export default Post
