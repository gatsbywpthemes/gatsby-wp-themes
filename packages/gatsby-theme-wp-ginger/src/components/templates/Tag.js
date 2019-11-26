/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './../Layout'
import PostEntry from '../post/PostEntry'
import Pagination from './../Pagination'
import SEO from '../seo/Seo'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'

const Tag = ({ tag, ctx }) => {
  const { name, posts, slug } = tag
  const { pageNumber } = ctx
  const { postsPrefix } = useThemeOptions()
  const url = `tag/${slug}`
  return (
    <Layout>
      <SEO
        title={`${name} Archives`}
        pageNumber={pageNumber}
        ogType="object"
        ogUrl={url}
      />
      <section>
        <h1 sx={{ variant: 'special.archiveTitle' }}>
          <span className="page-title-taxonomy-type">Posts tagged as:</span>
          <span className="page-title-taxonomy-value">{name}</span>
        </h1>
        {posts.nodes &&
          posts.nodes.map(post => (
            <PostEntry key={post.id} post={post} postsPrefix={postsPrefix} />
          ))}
      </section>
      <Pagination ctx={ctx} prefix={url} />
    </Layout>
  )
}

export default Tag
