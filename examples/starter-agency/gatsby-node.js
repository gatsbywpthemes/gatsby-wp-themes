const path = require("path")
const createProjects = require("./create/createProjects")
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src/"),
      },
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  await createProjects({ actions, graphql })
}
