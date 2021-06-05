import React from "react"
import "./src/styles/tailwind.css"

import { CustomThemeWrapper } from "./src/components/CustomThemeWrapper"

export const wrapPageElement = ({ element }) => (
  <CustomThemeWrapper>{element}</CustomThemeWrapper>
)
