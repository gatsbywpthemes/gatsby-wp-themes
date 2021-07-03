import React, { useState } from "react"
import Collapsible from "@kunukn/react-collapse"
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons"

export const Collapse = ({ menuItem, children }) => {
  const [open, setOpen] = useState(false)
  // const { isOpen, onToggle } = useDisclosure()
  const openStyle =
    menuItem.url === "#"
      ? {
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }
      : ""
  return (
    //TODO: remove focus color on click
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
      {menuItem.label} {open ? <ChevronDownIcon /> : <ChevronRightIcon />}
      <Collapsible isOpen={open}>{children}</Collapsible>
    </>
  )
}
