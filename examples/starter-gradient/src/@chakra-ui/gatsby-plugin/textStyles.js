import themeTextStyles from "@gatsbywpthemes/gatsby-theme-wp-starter/src/@chakra-ui/gatsby-plugin/textStyles"

const textStyles = {
  ...themeTextStyles,
  gradientTextYellow: {
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    backgroundImage: `linear-gradient(60deg, tomato, #FCB458)`,
  },
  gradientTextPurple: {
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    backgroundImage: `linear-gradient(60deg, tomato, #c725A3)`,
  },
  // : { color: "purple" },
}

export default textStyles
