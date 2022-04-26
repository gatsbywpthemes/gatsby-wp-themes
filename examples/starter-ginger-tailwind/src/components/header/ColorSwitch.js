import React from "react";
import useThemeDarkMode from "~/hooks/useThemeDarkMode";
import { FiSun, FiMoon } from "react-icons/fi";
export default function ColorSwitch() {
  const darkMode = useThemeDarkMode();
  return (
    <>
      <button
        onClick={darkMode.toggle}
        className="bg-gray-700 dark:bg-white dark:text-gray-800 rounded-full w-12 h-12 text-white flex items-center justify-center text-2xl"
      >
        {darkMode.value ? <FiSun /> : <FiMoon />}
      </button>
    </>
  );
}
