import React from "react"
import { FiSun, FiMoon } from "react-icons/fi"

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
      <label className="rounded-buttons" {...props}>
        <input
          type="checkbox"
          onChange={darkMode.toggle}
          checked={darkMode.value}
          className="hidden"
        />{" "}
        {darkMode.value === true ? <FiSun /> : <FiMoon />}
      </label>
    </>
  )
}
