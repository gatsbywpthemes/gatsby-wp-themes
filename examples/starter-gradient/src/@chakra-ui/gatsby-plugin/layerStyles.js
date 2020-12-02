import themeLayerStyles from "gatsby-theme-wp-starter/src/@chakra-ui/gatsby-plugin/layerStyles"

const layerStyles = {
  ...themeLayerStyles,
  gradientBgYellow: {
    backgroundImage: `linear-gradient(60deg, tomato, #FCB458)`,
  },
  gradientBgPurple: {
    backgroundImage: `linear-gradient(60deg, tomato, #c725A3)`,
  },
}

export default layerStyles
