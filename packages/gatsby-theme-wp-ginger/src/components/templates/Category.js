/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './../Layout'
import ArchiveContent from '../archive/ArchiveContent'
import SEO from '../seo/Seo'

const Category = ({ category, ctx }) => {
  const { name, posts, slug } = category
  const { pageNumber } = ctx
  const url = `category/${slug}/`
  return (
    <Layout>
      <SEO
        title={`${name} Archives`}
        pageNumber={pageNumber}
        ogType="object"
        ogUrl={url}
      />
      <ArchiveContent
        name={name}
        posts={posts}
        paginationPrefix={url}
        ctx={ctx}
      />
    </Layout>
  )
}

export default Category
