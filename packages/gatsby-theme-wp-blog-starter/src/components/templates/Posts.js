/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../Layout'
import SEO from '../Seo'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import ArchiveContent from '../archive/ArchiveContent'

const Posts = ({ posts, ctx }) => {
  const { postsPath } = useThemeOptions()
  return (
    <Layout>
      <SEO title="blog" description="this is the posts page" />
      <ArchiveContent posts={posts} ctx={ctx} paginationPrefix={postsPath} />
    </Layout>
  )
}

export default Posts
