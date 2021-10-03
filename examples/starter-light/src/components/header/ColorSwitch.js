import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { HiOutlineSun as Sun, HiOutlineMoon as Moon } from "react-icons/hi"

export const ColorSwitch = (props) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label {...props}>
          <input
            type="checkbox"
            onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
            className="hidden"
          />{" "}
          {theme === "dark" ? (
            <Sun className="text-[24px]" />
          ) : (
            <Moon className="text-[22px] w-[24px]" />
          )}
        </label>
      )}
    </ThemeToggler>
  )
}
