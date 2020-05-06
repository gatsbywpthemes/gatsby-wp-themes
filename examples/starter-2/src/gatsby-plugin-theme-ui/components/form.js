import merge from "deepmerge"
import { form } from "gatsby-theme-wp-blog-starter/src/gatsby-plugin-theme-ui/components"

export default merge(form, {
  'input[type="submit"], button[type=submit]': {
    variant: "buttons.secondary.gradient",
    margin: "auto 0 auto auto",
    fontWeight: "bold",
  },
})
