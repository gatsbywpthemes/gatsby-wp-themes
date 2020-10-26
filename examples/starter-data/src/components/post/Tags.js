/** @jsx jsx */
import { jsx } from 'theme-ui'
import { TaxonomyItem } from './index'

export const Tags = ({ post, ...props }) => {
  const tags = post?.tags?.nodes
  return (
    <div {...props}>
      {tags?.length > 0 && (
        <div sx={{ variant: `text.info`, mr: `xxs`, mb: `xs` }}>
          {tags?.length > 1 ? 'Tags: ' : 'Tag: '}
        </div>
      )}
      {tags?.map((tag) => (
        <TaxonomyItem taxName="tag" item={tag} key={tag.slug} />
      ))}
    </div>
  )
}
