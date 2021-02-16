import React from 'react'
import wrap from './wrap-root-element'
import { SidebarWrapper } from './src/components'
export const wrapRootElement = wrap

export const wrapPageElement = ({ element, props }) => (
  <SidebarWrapper {...props}>{element}</SidebarWrapper>
)
