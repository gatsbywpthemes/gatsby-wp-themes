/** @jsx jsx */
import { jsx } from 'theme-ui'
import Categories from './Categories'
import Tags from './Tags'

const PostEntryMeta = ({ post, ...props }) => {
  return (
    <div className="entry-meta" {...props}>
      <Categories post={post} />
      <Tags post={post} />
    </div>
  )
}

export default PostEntryMeta
