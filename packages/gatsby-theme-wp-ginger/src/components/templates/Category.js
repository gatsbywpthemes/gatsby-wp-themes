/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './../Layout'
import { ArchiveContent } from '../archive'
import { SeoArchive } from 'gatsby-plugin-wp-seo'

const Category = ({ category, ctx }) => {
  const { name, posts, uri } = category
  const { pageNumber } = ctx
  return (
    <Layout>
      <SeoArchive
        title={`${name} Archives`}
        pageNumber={pageNumber}
        uri={uri}
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
