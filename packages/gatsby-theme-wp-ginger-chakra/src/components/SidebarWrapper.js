import React, { useState, useEffect } from 'react'
import { SlideSidebar } from './index'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

export const SidebarWrapper = (props) => {
  const { children } = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <SlideSidebar
        open={open}
        setOpen={setOpen}
        //openClass={openClass}
        //setOpenClass={setOpenClass}
      />
      {children}
    </>
  )
}
