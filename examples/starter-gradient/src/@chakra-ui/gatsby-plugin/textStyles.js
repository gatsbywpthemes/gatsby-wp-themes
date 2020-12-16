import themeTextStyles from "@gatsbywpthemes/gatsby-theme-wp-starter/src/@chakra-ui/gatsby-plugin/textStyles"
const { detect } = require("detect-browser")
const browser = detect()

const textStyles = {
  ...themeTextStyles,
  gradientTextYellow: browser.name !== "safari" && {
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    backgroundImage: `linear-gradient(60deg, tomato, #FCB458)`,
  },
  gradientTextPurple: browser.name !== "safari" && {
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    backgroundImage: `linear-gradient(60deg, tomato, #c725A3)`,
  },
  // : { color: "purple" },
}

export default textStyles
