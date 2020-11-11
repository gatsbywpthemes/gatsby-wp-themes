import { mode } from "@chakra-ui/theme-tools"

import { base } from "./foundations/typography"
import typographySettings from "../../configTypography"

export const styles = {
  global: (props) => {
    return {
      html: {
        fontSize: typographySettings.baseFontSize || "16px",
      },
      body: {
        fontFamily: "body",
        color: mode("dark", "ultraLight")(props),
        bg: mode("ultraLight", "dark")(props),
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
      ...base,
    }
  },
}
