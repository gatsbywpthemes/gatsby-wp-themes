import merge from "deepmerge"
import { articleStyles as styles } from "gatsby-theme-wp-blog-starter/src/styles/articleStyles"

export const articleStyles = merge(styles, {
  ".entry-title": {
    fontSize: ["l", "xl"],
  },
})
