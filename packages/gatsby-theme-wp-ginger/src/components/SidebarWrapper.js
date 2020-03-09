import React, { useState, useEffect } from 'react'
import SlideSidebar from './SlideSidebar'

const SidebarWrapper = props => {
  const { children } = props
  const [open, updateOpen] = useState(false)
  const [openClass, setOpenClass] = useState(false)
  useEffect(() => {
    console.log('use effect in sidebar wrapper')
    if (openClass) {
      setOpenClass(false)
    }
  }, [children])
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

export default SidebarWrapper
