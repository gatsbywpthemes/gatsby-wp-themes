import "./src/styles/tailwind.css"
import React from "react"

import { CustomThemeWrapper } from "./src/components/CustomThemeWrapper"
console.log(CustomThemeWrapper)
export const wrapPageElement = ({ element }) => (
  <CustomThemeWrapper>{element}</CustomThemeWrapper>
)
