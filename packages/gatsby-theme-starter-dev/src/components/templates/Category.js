export default ({ category, ctx }) => (
  <pre>{JSON.stringify({ category, ctx }, null, 2)}</pre>
)
