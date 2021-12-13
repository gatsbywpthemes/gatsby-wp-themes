import themeTextStyles from "@gatsbywpthemes/gatsby-theme-wp-base/src/chakra/textStyles"

const textStyles = {
  ...themeTextStyles,
  gradientTextYellow: {
    WebkitTextFillColor: "transparent",
    bgGradient: `linear-gradient(60deg, tomato, #FCB458)`,
    WebkitBackgroundClip: "text",
  },
  gradientTextPurple: {
    WebkitTextFillColor: "transparent",
    bgGradient: `linear-gradient(60deg, tomato, #c725A3)`,
    WebkitBackgroundClip: "text",
  },
}

export default textStyles
