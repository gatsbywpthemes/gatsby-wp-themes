/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import TaxonomyItem from './TaxonomyItem.js'

const Categories = ({ post }) => {
  const categories = post.categories.nodes
  return (
    <div>
      {categories.length > 0 && (
        <Box>{categories.length > 1 ? 'Categories: ' : 'Category: '}</Box>
      )}
      {categories.map(cat => (
        <TaxonomyItem taxName="category" item={cat} key={cat.id} />
      ))}
    </div>
  )
}

export default Categories
