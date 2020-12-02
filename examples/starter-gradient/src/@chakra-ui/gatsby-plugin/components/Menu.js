import { mode, darken, transparentize } from "@chakra-ui/theme-tools"

const parts = ["item", "command", "list", "button", "groupTitle", "divider"]

function baseStyleList(props) {
  return {
    bg: mode(`subMenuBg`, `black`)(props),
    backgroundImage: mode("", `linear-gradient(70deg,tomato, #d93a85)`)(props),
    boxShadow: mode(`lg`, `dark-lg`)(props),
    color: mode(`subMenucolor`, `modes.dark.subMenuColor`)(props),
    minW: "200px",
    width: "auto",
    py: 4,
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "none",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "xs",
    letterSpacing: "wider",
    "&:before": {
      content: "''",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent",
      borderBottom: "7px solid",
      borderBottomColor: mode(`subMenuBg`, `transparent`)(props),
      position: "absolute",
      top: "-5px",
      left: 5,
    },
  }
}

function baseStyleItem(props) {
  return {
    py: 1,
    px: "20px !important",

    transition: "color .4s",
    _focus: {
      bg: "transparent",
      color: mode(`primary`, `black`)(props),
    },
    _hover: {
      color: mode(`primary`, `black`)(props),
    },
    _active: {
      bg: "transparent",
      color: mode(`primary`, `black`)(props),
    },
    _expanded: {
      bg: "transparent",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  }
}

const baseStyleGroupTitle = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm",
}

const baseStyleCommand = {
  opacity: 0.6,
}

const baseStyleDivider = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "0.5rem",
  opacity: 0.6,
}

const baseStyle = (props) => {
  return {
    list: baseStyleList(props),
    item: baseStyleItem(props),
    groupTitle: baseStyleGroupTitle,
    command: baseStyleCommand,
    divider: baseStyleDivider,
  }
}

export default {
  parts,
  baseStyle,
}
