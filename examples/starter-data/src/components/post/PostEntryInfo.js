/** @jsx jsx */
import { jsx } from 'theme-ui'
import Date from './Date'
import Author from './Author'

const PostEntryInfo = ({ post }) => {
  return (
    <div className="entry-info animate-on-scroll" sx={{ variant: `text.info` }}>
      <span>Posted on:</span> <Date post={post} /> by <Author post={post} />
    </div>
  )
}

export default PostEntryInfo
