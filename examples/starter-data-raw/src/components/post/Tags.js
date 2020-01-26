/** @jsx jsx */
import { jsx } from 'theme-ui'
import TaxonomyItem from './TaxonomyItem.js'

const Tags = ({ post }) => {
  const tags = post.tags.nodes
  return (
    <div>
      {tags.length > 0 && <div>{tags.length > 1 ? 'Tags: ' : 'Tag: '}</div>}
      {tags.map(tag => (
        <TaxonomyItem taxName="tag" item={tag} key={tag.id} />
      ))}
    </div>
  )
}

export default Tags
