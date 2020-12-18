import React, { useState, useEffect } from 'react'
import { SlideSidebar } from './index'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const SidebarWrapper = (props) => {
  const { children } = props
  const [open, updateOpen] = useState(false)
  const [openClass, setOpenClass] = useState(false)
  const { openMenuThreshold } = useThemeOptions()

  useEffect(() => {
    if (!openMenuThreshold || window.innerWidth < parseInt(openMenuThreshold)) {
      setOpenClass(false)
    }
  }, [children, openMenuThreshold])
  return (
    <>
      <SlideSidebar
        open={open}
        updateOpen={updateOpen}
        openClass={openClass}
        setOpenClass={setOpenClass}
      />
      {children}
    </>
  )
}
