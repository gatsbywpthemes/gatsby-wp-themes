const gradientButtonStyle = {
  fontSize: "xs",
  letterSpacing: "wider",
  borderRadius: "full",
  color: "white",
  textTransform: "uppercase",
  transition: "all .4s",
  boxShadow: "lg",
  px: 6,
  _hover: {
    transform: "translateY(-3px)",
    boxShadow: "hover",
  },
}
const Button = {
  variants: {
    gradientYellow: {
      bgGradient: `linear-gradient(60deg, tomato, #FCB458)`,
      ...gradientButtonStyle,
    },
    gradientPurple: {
      bgGradient: `linear-gradient(60deg, tomato, #c725A3)`,
      ...gradientButtonStyle,
    },
  },
  defaultProps: {
    variant: "gradientPurple",
  },
}

export default Button
