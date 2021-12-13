import React from "react"
import { HiOutlineSun as Sun, HiOutlineMoon as Moon } from "react-icons/hi"
import useDarkMode from "use-dark-mode"
import Helmet from "react-helmet"

export const ColorSwitch = (props) => {
  const darkMode = useDarkMode(false)

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: darkMode.value === true ? "dark" : "light",
        }}
      />
      <label {...props}>
        <input
          type="checkbox"
          onChange={darkMode.toggle}
          checked={darkMode.value}
          className="hidden"
        />{" "}
        {darkMode.value === true ? (
          <Sun className="text-[24px] text-dark-text -mt-1" />
        ) : (
          <Moon className="text-[22px] w-[24px] text-dark-text -mt-2" />
        )}
      </label>
    </>
  )
}
