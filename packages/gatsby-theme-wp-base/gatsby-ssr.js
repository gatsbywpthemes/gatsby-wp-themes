import React from 'react'

import { CustomThemeWrapper } from 'baseComponents/CustomThemeWrapper'
export const wrapPageElement = ({ element }) => (
  <CustomThemeWrapper>{element}</CustomThemeWrapper>
)
