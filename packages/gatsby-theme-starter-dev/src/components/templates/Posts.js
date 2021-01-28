export default ({ posts, ctx }) => (
  <pre>{JSON.stringify({ posts, ctx }, null, 2)}</pre>
)
