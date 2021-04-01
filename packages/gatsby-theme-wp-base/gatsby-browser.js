import './src/styles/tailwind.css'
import React from 'react'

import { CustomThemeWrapper } from 'starterComponents/CustomThemeWrapper'
console.log(CustomThemeWrapper)
export const wrapPageElement = ({ element }) => (
  <CustomThemeWrapper>{element}</CustomThemeWrapper>
)
