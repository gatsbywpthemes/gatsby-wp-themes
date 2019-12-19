const webpack = require("webpack")

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()
  config.plugins.push(
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  )
  actions.replaceWebpackConfig(config)
}
