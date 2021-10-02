import React, { useState } from "react"
import Collapsible from "@kunukn/react-collapse"
import { CgChevronDown, CgChevronRight } from "react-icons/cg"
import tw, { css } from "twin.macro"

export const Collapse = ({ trigger, children, ...props }) => {
  const [open, setOpen] = useState(false)

  return (
    <div {...props}>
      <button
        aria-label="Open menu item"
        onClick={() => setOpen(!open)}
        className={`absolute top-2 right-0 w-full flex justify-end`}
        css={css`
          svg {
            ${tw`w-5 h-5 text-mobileMenuColor dark:text-dark-mobileMenuColor`}
          }
        `}
      >
        {trigger} {open ? <CgChevronDown /> : <CgChevronRight />}
      </button>
      <Collapsible isOpen={open}>{children}</Collapsible>
    </div>
  )
}
