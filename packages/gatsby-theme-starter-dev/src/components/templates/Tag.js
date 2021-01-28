export default ({ tag, ctx }) => (
  <pre>{JSON.stringify({ tag, ctx }, null, 2)}</pre>
)
