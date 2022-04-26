import useDarkMode from "use-dark-mode";
export default function useThemeDarkMode() {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
    storageKey: "darkMode",
    minify: true,
  });

  return darkMode;
}
