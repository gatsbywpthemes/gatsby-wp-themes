{
  resolve: {
    modules: [...],
    fallback: {

      "process": require.resolve("process/browser")
    }
  },
  entry: [...],
  output: {...},
  module: {
    rules: [...]
  },
