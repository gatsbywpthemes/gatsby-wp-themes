const sharedButtonStyles = {
  boxSizing: "border-box !important",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontFamily: "neutral",
  textTransform: "uppercase",
  fontSize: "xxs",
  variant: "transitions.m",
  letterSpacing: 1,
  boxShadow: "medium",
  lineHeight: "tight",
  py: "xxs",
  px: "l",
  borderRadius: "50px",
  fontWeight: 500,
  display: "inline-block",

  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "hover",
    color: "white",
    a: {
      color: "white",
    },
  },
  a: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "white !important",
    },
  },
  "&[disabled]": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
}

const small = {
  py: 4,
  px: "s",
  fontSize: 12,
  fontWeight: "bold",
}
const outline = {
  ...sharedButtonStyles,
  padding: "xxs",
  bg: "transparent",
  border: "1px solid",
  color: "text",
  fontWeight: "bold",
  boxShadow: "inset 0 0 0 0 currentColor",
  transition: ".3s",
  a: {
    color: "text",
  },
  ":hover:not([disabled])": {
    boxShadow: "inset 0 0 0 2px currentColor",
  },
}

const primary = {
  ...sharedButtonStyles,
  bg: "primary",
}

const secondary = {
  ...sharedButtonStyles,
  bg: "secondary",
}
const gradientPrimary = {
  variant: ["gradients.primary", "transitions.m"],
}

const gradientSecondary = {
  variant: ["gradients.secondary", "transitions.m"],
}

export default {
  primary: {
    ...primary,
    gradient: {
      ...primary,
      ...gradientPrimary,
      small: {
        ...primary,
        ...gradientPrimary,
        ...small,
      },
    },
    small: {
      ...primary,
      ...small,
    },
  },
  secondary: {
    ...secondary,
    gradient: {
      ...secondary,
      ...gradientSecondary,
      small: {
        ...secondary,
        ...gradientSecondary,
        ...small,
      },
    },
    small: {
      ...secondary,
      ...small,
    },
  },
  outline: {
    ...outline,
    small: {
      ...outline,
      ...small,
    },
  },
  hamburger: {
    pointer: "cursor",
    variant: "transitions.m",
    svg: {
      stroke: "headerColor",
      variant: "transitions.m",
    },

    bg: "transparent",
    "&:hover svg": {
      stroke: "headerColorHover",
    },
    "&.btn-menu-opened": {
      transform: "translate3d(4rem, 0, 0)",
    },
  },
}
