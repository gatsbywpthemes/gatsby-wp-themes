export default ({ page, ctx }) => (
  <pre>{JSON.stringify({ page, ctx }, null, 2)}</pre>
)
