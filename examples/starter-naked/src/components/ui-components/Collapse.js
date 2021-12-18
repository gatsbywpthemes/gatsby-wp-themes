import React, { useState } from "react"
import Collapsible from "@kunukn/react-collapse"
import {
  ChevronDownIcon as ChevronDown,
  ChevronRightIcon as ChevronRight,
} from "@heroicons/react/outline"

export const Collapse = ({ trigger, children, className, ...props }) => {
  const [open, setOpen] = useState(false)
  const iconStyle = "w-5 text-mobileMenuColor dark:text-dark-mobileMenuColor"

  return (
    <div {...props}>
      <button
        aria-label="Open menu item"
        onClick={() => setOpen(!open)}
        className={`flex w-full justify-between ${className ? className : ""} `}
      >
        {trigger}{" "}
        {open ? (
          <ChevronDown className={iconStyle} />
        ) : (
          <ChevronRight className={iconStyle} />
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
