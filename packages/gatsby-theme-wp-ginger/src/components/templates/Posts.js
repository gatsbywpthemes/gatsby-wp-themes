import React from 'react'
import Layout from '../Layout.js'
import PostEntry from '../post/PostEntry'
import Pagination from '../Pagination'
import SEO from '../seo/Seo'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import slashes from 'remove-trailing-slash'

const Posts = ({ posts, ctx }) => {
  const { pageNumber } = ctx
  const { postsPrefix, postsPath } = useThemeOptions()
  const ogType = slashes(postsPath) === '' ? 'website' : 'object'
  return (
    <Layout>
      <SEO
        titleTemplate={'withDescription'}
        pageNumber={pageNumber}
        ogType={ogType}
        ogUrl={postsPath}
      />
      {posts &&
        posts.map(post => (
          <PostEntry
            key={post.id}
            post={post}
            postsPrefix={postsPrefix}
            location="archive"
          />
        ))}
      <Pagination prefix={postsPath} ctx={ctx} />
    </Layout>
  )
}

export default Posts
