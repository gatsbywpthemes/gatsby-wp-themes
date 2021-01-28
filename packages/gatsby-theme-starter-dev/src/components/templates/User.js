export default ({ user, ctx }) => (
  <pre>{JSON.stringify({ user, ctx }, null, 2)}</pre>
)
