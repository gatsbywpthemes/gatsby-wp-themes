import merge from "deepmerge"
import { widgetStyles as styles } from "gatsby-theme-wp-blog-starter/src/styles/widgetStyles"

const widgetTitle = {
  ".widget-title": {
    variant: "text.gradient.secondary",
  },
}

export const widgetStyles = merge(styles, {
  categories: {
    ...widgetTitle,
  },
  tags: {
    ...widgetTitle,
  },
  recentPosts: {
    ...widgetTitle,
  },
  newsletter: {
    ...widgetTitle,
  },
})
