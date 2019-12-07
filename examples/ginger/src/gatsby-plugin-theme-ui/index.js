import merge from "deepmerge"
import theme from "gatsby-theme-wp-ginger/src/gatsby-plugin-theme-ui/index"
const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray
export default merge(
  theme,
  {
    colors: {
      //primary: "teal",
    },
    layer: {
      slideMenu: {
        //bg: "red",
      },
    },
    sizes: {
      //header: ["64px", "64px", "128px"],
    },

    fonts: {
      /* heading: "Alfa Slab One, serif",
      body: "ABeeZee, sans-serif", */
    },
    fontWeights: {
      /*    heading: 400,
      body: 4300, */
    },
  },
  { arrayMerge: overwriteMerge }
)
