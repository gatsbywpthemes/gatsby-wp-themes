import merge from "deepmerge"
import grommetTheme from "gatsby-theme-wp-blog-starter/src/styles/grommet"
// eslint-disable-next-line no-unused-vars
import { colors } from "gatsby-theme-wp-blog-starter/src/gatsby-plugin-theme-ui/components"

export default merge(grommetTheme, {
  layer: {
    overlay: {
      // background: colors.primary,
    },
  },
})
