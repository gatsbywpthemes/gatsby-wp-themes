import React from 'react'
import SlideSidebar from './SlideSidebar'

const SidebarWrapper = ({ children }) => (
  <>
    {children}
    <SlideSidebar />
  </>
)

export default SidebarWrapper
