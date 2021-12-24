import React, { useState } from "react"
import Collapsible from "@kunukn/react-collapse"
import {
  PlusIcon as ClosedIcon,
  MinusIcon as OpenIcon,
} from "@heroicons/react/outline"

export const Collapse = ({ trigger, children, className, ...props }) => {
  const [open, setOpen] = useState(false)
  const iconStyle = "w-5"

  return (
    <div {...props}>
      <button
        aria-label="Open item"
        onClick={() => setOpen(!open)}
        className={`flex w-full justify-between ${className ? className : ""} `}
      >
        {trigger}{" "}
        {open ? (
          <OpenIcon className={iconStyle} />
        ) : (
          <ClosedIcon className={iconStyle} />
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
