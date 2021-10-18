import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"
import {
  CgArrowLongLeft as ArrowPrev,
  CgArrowLongRight as ArrowNext,
} from "react-icons/cg"

const animStyle =
  "transition duration-700 transform scale-x-0 bg-text  w-7 h-[1px] group-hover:scale-x-100 "

const LinkButton = ({ className, ...props }) => {
  return (
    <Link
      className={clsx(
        "prev-next-text",
        "transition duration-700 transform group-hover:translate-x-0",
        className
      )}
      {...props}
    />
  )
}
const renderPreviousLink = ({ prev }) => {
  let previousLink = null
  if (!prev) {
    return <span className="text-gray-400 prev-next-text">Previous</span>
  } else {
    previousLink = `${prev}`
  }

  return (
    <div className="flex items-center group">
      <div className={`prev-next-anim -mr-4`} />
      <LinkButton
        className="ml-6 -translate-x-7 "
        to={previousLink}
        aria-label="visit previous post"
      >
        <span>Previous</span>
      </LinkButton>
    </div>
  )
}

const renderNextLink = ({ next }) => {
  if (next) {
    return (
      <div className="flex items-center group">
        <LinkButton
          className="mr-6 translate-x-7 "
          aria-label="visit next post"
          to={`${next}`}
        >
          <span>Next</span>
        </LinkButton>
        <div className={`prev-next-anim -ml-4`} />
      </div>
    )
  } else {
    return <span className="text-gray-400 prev-next-text">Next</span>
  }
}

export const PrevNextPostNavigation = ({ ctx }) => {
  return (
    <nav className="flex justify-between mt-16">
      {renderPreviousLink(ctx)}
      {renderNextLink(ctx)}
    </nav>
  )
}
