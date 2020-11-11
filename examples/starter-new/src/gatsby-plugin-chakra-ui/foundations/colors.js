import { theme } from "@chakra-ui/core"

const {
  red,
  orange,
  yellow,
  green,
  teal,
  cyan,
  purple,
  pink,
  gray,
} = theme.colors

const blue = {
  50: "#e2ffff",
  100: "#baf2f7",
  200: "#90e5f0",
  300: "#67d6ea",
  400: "#43c4e3",
  500: "#30a4ca",
  600: "#237c9e",
  700: "#175671",
  800: "#083245",
  900: "#00141a",
}
// const gray = {
//   50: "#e6f9ff",
//   100: "#ccdfe5",
//   200: "#b1c6cd",
//   300: "#93aeb7",
//   400: "#7795a1",
//   500: "#5e7a88",
//   600: "#47626b",
//   700: "#31484d",
//   800: "#192e30",
//   900: "#001514",
// }

export const colors = {
  light: gray[100],
  ultraLight: gray[50],
  dark: gray[800],
  ultraDark: gray[900],
  primary: gray[600],
  secondary: gray[700],
  accentLight: pink[500],
  accentDark: red[500],
  highlight: orange[500],
  mutted: gray[200],
  blue,
  // gray,
}
