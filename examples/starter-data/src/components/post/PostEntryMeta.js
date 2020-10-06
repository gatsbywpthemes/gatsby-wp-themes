/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Categories, Tags } from './index'

export const PostEntryMeta = ({ post, ...props }) => {
  return (
    <div className="entry-meta" {...props}>
      <Categories post={post} />
      <Tags post={post} />
    </div>
  )
}
