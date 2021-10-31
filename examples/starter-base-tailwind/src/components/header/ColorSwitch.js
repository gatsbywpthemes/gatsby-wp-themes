import React from "react"
// import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { HiOutlineSun as Sun, HiOutlineMoon as Moon } from "react-icons/hi"
import useDarkMode from "use-dark-mode"

export const ColorSwitch = (props) => {
  const darkMode = useDarkMode(false)
  console.log("dark", darkMode)
  return (
    // <ThemeToggler>
    //   {({ theme, toggleTheme }) => (
    //     <label {...props}>
    //       <input
    //         type="checkbox"
    //         onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
    //         checked={theme === "dark"}
    //         className="hidden"
    //       />{" "}
    //       {theme === "dark" ? (
    //         <Sun className="text-[24px] text-dark-text -mt-1 sm:mt-0" />
    //       ) : (
    //         <Moon className="text-[22px] w-[24px] -mt-2 sm:mt-0" />
    //       )}
    //     </label>
    //   )}
    // </ThemeToggler>
    <>
      <label {...props}>
        <input
          type="checkbox"
          onChange={darkMode.toggle}
          checked={darkMode.value}
          className="hidden"
        />{" "}
        {darkMode.value === true ? (
          <Sun className="text-[24px] text-dark-text -mt-1 sm:mt-0" />
        ) : (
          <Moon className="text-[22px] w-[24px] text-text -mt-2 sm:mt-0" />
        )}
      </label>
    </>
  )
}
