/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import PostEntry from '../post/PostEntry'
import Pagination from './Pagination'
import ArchiveTitle from './ArchiveTitle'

const ArchiveContent = ({
  posts,
  ctx,
  paginationPrefix,
  name,
  text = 'Posts from: ',
}) => {
  return (
    <Fragment>
      <section>
        {name && <ArchiveTitle text={text} name={name} />}
        {posts.nodes &&
          posts.nodes.map(post => <PostEntry key={post.id} post={post} />)}
      </section>
      <Pagination ctx={ctx} prefix={paginationPrefix} />
    </Fragment>
  )
}
export default ArchiveContent
