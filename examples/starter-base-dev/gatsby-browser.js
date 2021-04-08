import "./src/styles/tailwind.css"
import React from "react"

import { CustomThemeWrapper } from "./src/components/CustomThemeWrapper"

export const wrapPageElement = ({ element }) => (
  <CustomThemeWrapper>{element}</CustomThemeWrapper>
)
