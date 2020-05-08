/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { PostEntry } from '../post'

export const PostsList = ({ posts, ...props }) => (
  <Box className="posts-list" {...props}>
    {posts.map(post => (
      <PostEntry key={post.id} location="archive" post={post} />
    ))}
  </Box>
)
