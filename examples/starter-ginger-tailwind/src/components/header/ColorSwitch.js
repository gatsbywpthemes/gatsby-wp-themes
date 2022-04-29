import React from "react";
import useThemeDarkMode from "~/hooks/useThemeDarkMode";
import { FiSun, FiMoon } from "react-icons/fi";
export default function ColorSwitch() {
  const darkMode = useThemeDarkMode();
  return (
    <>
      <button onClick={darkMode.toggle} className="rounded-buttons">
        {darkMode.value ? <FiSun /> : <FiMoon />}
      </button>
    </>
  );
}
