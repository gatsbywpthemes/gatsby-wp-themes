import React, { useState } from "react"
import Collapsible from "@kunukn/react-collapse"
import { CgChevronDown, CgChevronRight } from "react-icons/cg"
import tw, { css } from "twin.macro"

export const Collapse = ({ trigger, children, className, ...props }) => {
  const [open, setOpen] = useState(false)
  const iconStyle =
    "font-bold text-[25px] text-mobileMenuColor dark:text-dark-mobileMenuColor"

  return (
    <div {...props}>
      <button
        aria-label="Open menu item"
        onClick={() => setOpen(!open)}
        className={`flex w-full justify-between ${className ? className : ""} `}
      >
        {trigger}{" "}
        {open ? (
          <CgChevronDown className={iconStyle} />
        ) : (
          <CgChevronRight className={iconStyle} />
        )}
      </button>
      <Collapsible
        className="duration-500 ease-out transition-max-h"
        isOpen={open}
      >
        {children}
      </Collapsible>
    </div>
  )
}
