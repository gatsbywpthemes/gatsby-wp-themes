import merge from "deepmerge"
import basicTheme from "gatsby-theme-wp-blog-starter/src/gatsby-plugin-theme-ui/index"
export default merge(basicTheme, {
  // colors: { primary: "tomato", secondary: "purple" },
  fonts: { heading: "roboto slab" },
  fontWeights: {
    // heading: "300",
  },
  // buttons: {
  //   ...basicTheme.buttons,
  // },
  // styles: {
  //   ...basicTheme.styles,
  // },
})
