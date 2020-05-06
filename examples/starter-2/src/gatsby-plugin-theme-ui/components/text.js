import merge from "deepmerge"
import { text } from "gatsby-theme-wp-blog-starter/src/gatsby-plugin-theme-ui/components/text"

export default merge(text, {
  gradient: {
    primary: {
      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
      variant: ["gradients.primary"],
    },
    secondary: {
      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
      variant: ["gradients.secondary"],
    },
    blue: {
      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
      variant: ["gradients.blue"],
    },
  },
  branding: {
    fontSize: ["s", "m", "l"],
    textTransform: "uppercase",
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: 500,
    letterSpacing: 4,
    lineHeight: 1.5,
    variant: ["text.gradient.primary", "transitions.m"],

    m: 0,
    a: {
      color: "headerColor",

      "&:hover": {
        color: "headerColorHover",
      },
    },
  },
  headingGradient: {
    textTransform: "uppercase",
    variant: "gradients.primary",
    color: "white",
    py: "s",
    px: "s",
    fontWeight: 300,
    borderRadius: "s",
    textAlign: "center",
  },
  headingBorders: {
    fontSize: "s",
    textAlign: "center",
    color: "text",
    ".inverse &": {
      color: "textInverse",
    },
    variant: "text.gradient.secondary",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textTransform: "uppercase",
    alignItems: "center",
    letterSpacing: "2px",
    borderRadius: "50px",
    py: 12,
    ":after, :before": {
      content: '""',
      height: "1px",
      borderTop: "1px solid",
      flex: "1 0",
    },
    ":after": {
      ml: "xs",
    },
    ":before": {
      mr: "xs",
    },
  },
  info: {
    display: "inline-block",
    lineHeight: "tight",
    fontFamily: "neutral",
    bg: "infoBg",
    py: 6,
    px: "m",
    width: "auto",
    fontStyle: "italic",
    borderRadius: "50px",
    mb: "l",
  },
})
