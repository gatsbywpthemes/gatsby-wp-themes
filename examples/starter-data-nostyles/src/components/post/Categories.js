/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { TaxonomyItem } from './index'

export const Categories = ({ post, ...props }) => {
  const categories = post.categories.nodes
  return (
    <div sx={{ mb: `xxs` }} {...props}>
      {categories.length > 0 && (
        <div sx={{ variant: `text.info`, mr: `xxs`, mb: `xs` }}>
          {categories.length > 1 ? 'Categories: ' : 'Category: '}
        </div>
      )}
      {categories.map((cat) => (
        <TaxonomyItem taxName="category" item={cat} key={cat.slug} />
      ))}
    </div>
  )
}
