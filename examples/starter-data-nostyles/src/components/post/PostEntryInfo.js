/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Date, Author } from './index'

export const PostEntryInfo = ({ post, ...props }) => {
  return (
    <div
      className="entry-info animate-on-scroll"
      sx={{ variant: `text.info` }}
      {...props}
    >
      <span>Posted on:</span> <Date post={post} /> by <Author post={post} />
    </div>
  )
}
