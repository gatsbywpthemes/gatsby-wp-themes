import React from 'react'
import wrap from './wrap-root-element'
import { SidebarWrapper, CustomThemeWrapper } from './src/components'

export const wrapRootElement = wrap

export const wrapPageElement = ({ element, props }) => (
  <CustomThemeWrapper>
    <SidebarWrapper {...props}>{element}</SidebarWrapper>
  </CustomThemeWrapper>
)
