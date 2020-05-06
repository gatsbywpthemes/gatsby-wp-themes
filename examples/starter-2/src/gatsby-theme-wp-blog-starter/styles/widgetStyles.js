import merge from "deepmerge"
import styles from "gatsby-theme-wp-blog-starter/src/styles/widgetStyles"

const widgetTitle = {
  ".widget-title": {
    variant: "text.gradient.secondary",
  },
}

export default merge(styles, {
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
