import merge from "deepmerge"
import styles from "gatsby-theme-wp-blog-starter/src/styles/articleStyles"

export default merge(styles, {
  ".entry-title": {
    fontSize: ["l", "xl"],
  },
})
