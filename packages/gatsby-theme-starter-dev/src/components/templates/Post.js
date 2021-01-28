export default ({ post, ctx }) => (
  <pre>{JSON.stringify({ post, ctx }, null, 2)}</pre>
)
