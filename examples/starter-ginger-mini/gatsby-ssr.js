import React from 'react'
import { SidebarWrapper, CustomThemeWrapper } from './src/components'

export const wrapPageElement = ({ element, props }) => (
  <CustomThemeWrapper>
    <SidebarWrapper {...props}>{element}</SidebarWrapper>
  </CustomThemeWrapper>
)
