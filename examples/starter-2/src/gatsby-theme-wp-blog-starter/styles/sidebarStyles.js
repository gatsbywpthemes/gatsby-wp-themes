import merge from "deepmerge"
import { sidebarStyles as styles } from "gatsby-theme-wp-blog-starter/src/styles/sidebarStyles"

export const sidebarStyles = merge(styles, {
  borderRadius: "m",
})
