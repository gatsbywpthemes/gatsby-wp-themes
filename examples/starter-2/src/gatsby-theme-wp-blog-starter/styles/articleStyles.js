import merge from "deepmerge"
import { articleStyles as styles } from "gatsby-theme-wp-blog-starter/src/styles/articleStyles"

export const articleStyles = merge(styles, {
  ".entry-media .gatsby-image-wrapper": {
    borderRadius: "10px 10px 0 0",
  },
  ".content": {
    borderRadius: ["0 0 10px 10px"],
    "&.page-content, &.no-img": {
      borderRadius: ["m"],
    },
  },
})
