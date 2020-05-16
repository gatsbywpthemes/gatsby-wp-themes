/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './../Layout'
import { ArchiveContent } from '../archive'
import { SEO } from '../seo'

const Category = ({ category, ctx }) => {
  const { name, posts, uri } = category
  const { pageNumber } = ctx
  return (
    <Layout>
      <SEO
        title={`${name} Archives`}
        pageNumber={pageNumber}
        ogType="object"
        ogUrl={uri}
      />
      <ArchiveContent
        name={name}
        posts={posts}
        paginationPrefix={uri}
        ctx={ctx}
      />
    </Layout>
  )
}

export default Category
