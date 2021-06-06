import React from "react"
import { useColorMode, IconButton } from "@chakra-ui/react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import { MoonIcon, SunIcon } from "@chakra-ui/icons"

export const ColorSwitch = (props) => {
  // const { colorMode, toggleColorMode } = useColorMode()
  // return (
  //   <IconButton
  //     aria-label="Toggle color mode"
  //     variant="unstyled"
  //     onClick={toggleColorMode}
  //     icon={colorMode === 'light' ? <MoonIcon mt="-5px" /> : <SunIcon />}
  //     {...props}
  //   />
  // )

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input
            type="checkbox"
            onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />{" "}
          Dark mode
        </label>
      )}
    </ThemeToggler>
  )
}
