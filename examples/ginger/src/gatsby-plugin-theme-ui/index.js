import merge from "deepmerge"
import theme from "gatsby-theme-wp-ginger/src/gatsby-plugin-theme-ui/index"
const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray
export default merge(
  theme,
  {
    colors: {
      primary: "teal",
    },
    layer: {
      slideMenu: {
        bg: "#076666",
      },
    },
    sizes: {
      //header: ["64px", "64px", "128px"],
    },

    fonts: {
      /*  heading: "Anton, sans-serif",
      body: "Arya, sans-serif", */
    },
    fontWeights: {
      /*  body: "400", */
    },
  },
  { arrayMerge: overwriteMerge }
)
