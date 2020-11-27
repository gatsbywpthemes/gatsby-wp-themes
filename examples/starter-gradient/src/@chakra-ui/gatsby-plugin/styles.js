import { mode } from "@chakra-ui/theme-tools"
import typographySettings from "../../../configTypography"

const styles = {
  global: (props) => {
    return {
      html: {
        fontSize: typographySettings.baseFontSize || "16px",
      },
      body: {
        fontFamily: "body",
        color: mode("text", "modes.dark.text")(props),
        bg: mode("bg", "modes.dark.bg")(props),
        transition: "all .4s ease-in-out",
        lineHeight: "body",
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word",
      },
      "*:focus": {
        outlineStyle: "dashed",
        outlineWidth: "0.5px",
      },
      blockquote: {
        fontStyle: "italic",
        px: [5, 12],
        py: 8,
        borderLeft: "5px solid",
        borderColor: "primary",
        maxWidth: "800px !important",
        mx: "auto",
        my: 10,
        bg: mode("light", "dark")(props),
      },

      ...typographySettings.base,
    }
  },
}

export default styles
