import themeTextStyles from "@gatsbywpthemes/gatsby-theme-wp-base/src/chakra/textStyles"

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
}

export default textStyles
