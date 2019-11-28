/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import TaxonomyItem from './TaxonomyItem.js'

const Categories = ({ post }) => {
  const categories = post.categories.nodes
  return (
    <div sx={{ mb: `xxs` }}>
      {categories.length > 0 && (
        <Box sx={{ variant: `text.info`, mr: `xxs`, mb: `xs` }}>
          {categories.length > 1 ? 'Categories: ' : 'Category: '}
        </Box>
      )}
      {categories.map(cat => (
        <TaxonomyItem taxName="category" item={cat} key={cat.id} />
      ))}
    </div>
  )
}

export default Categories
