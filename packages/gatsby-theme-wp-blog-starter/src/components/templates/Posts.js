/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Layout } from '../Layout'
import { SEO } from '../seo'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import slashes from 'remove-trailing-slash'
import { ArchiveContent } from '../archive'

const Posts = ({ posts, ctx }) => {
  const { postsPath } = useThemeOptions()
  const { pageNumber } = ctx
  const ogType = slashes(postsPath) === '' ? 'website' : 'object'
  return (
    <Layout page="blog">
      <SEO
        titleTemplate={'withDescription'}
        pageNumber={pageNumber}
        ogType={ogType}
        ogUrl={postsPath}
      />
      <ArchiveContent posts={posts.nodes} ctx={ctx} />
    </Layout>
  )
}

export default Posts
