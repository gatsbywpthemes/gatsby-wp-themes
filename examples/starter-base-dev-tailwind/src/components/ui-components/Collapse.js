import React, { useState } from "react"
import Collapsible from "@kunukn/react-collapse"
import { CgChevronDown, CgChevronRight } from "react-icons/cg"

export const Collapse = ({ menuItem, children }) => {
  const [open, setOpen] = useState(false)

  const openStyle =
    menuItem.url === "#"
      ? {
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }
      : ""
  return (
    <>
      <button
        aria-label="Open menu item"
        onClick={() => setOpen(!open)}
        css={{
          position: "absolute",
          top: 2,
          right: 0,
          ...openStyle,
          svg: {
            width: "1.5rem",
            height: "1.5rem",
            stroke: "white",
          },
        }}
      />
      {menuItem.label} {open ? <CgChevronDown /> : <CgChevronRight />}
      <Collapsible isOpen={open}>{children}</Collapsible>
    </>
  )
}
