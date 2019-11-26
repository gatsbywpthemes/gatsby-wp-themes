/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './../Layout'
import PostEntry from '../post/PostEntry'
import Pagination from './../Pagination'
import SEO from '../seo/Seo'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'

const User = ({ user, ctx }) => {
  const { name, posts, slug } = user
  const { pageNumber } = ctx
  const { postsPrefix } = useThemeOptions()
  const url = `author/${slug}`

  return (
    <Layout>
      <SEO
        title={`Author Archives: ${name}`}
        pageNumber={pageNumber}
        ogType="object"
        ogUrl={url}
      />
      <section>
        <h1 sx={{ variant: 'special.archiveTitle' }}>
          <span className="page-title-taxonomy-type">Posts by:</span>
          <span className="page-title-taxonomy-value">{name}</span>
        </h1>
        {posts.nodes &&
          posts.nodes.map(post => (
            <PostEntry key={post.id} post={post} postsPrefix={postsPrefix} />
          ))}
        <Pagination ctx={ctx} prefix={url} />
      </section>
    </Layout>
  )
}

export default User
