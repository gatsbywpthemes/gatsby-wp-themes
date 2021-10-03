import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"
import {
  CgArrowLongLeft as ArrowPrev,
  CgArrowLongRight as ArrowNext,
} from "react-icons/cg"

const renderPreviousLink = (previousPagePath) => {
  if (previousPagePath) {
    return (
      <div className="flex items-center group">
        <ArrowPrev className="text-current transition duration-700 transform scale-x-0  text-[30px] group-hover:scale-x-100 -mr-4" />
        <Link
          className={clsx(
            "tracking-widest uppercase font-bold font-info text-sm",
            `bg-black px-4 py-1 text-white`,
            "transition duration-700 transform group-hover:translate-x-0",
            "ml-6 -translate-x-7"
          )}
          to={previousPagePath}
        >
          <span>Previous</span>
        </Link>
      </div>
    )
  } else {
    return <span />
  }
}

const renderNextLink = (nextPagePath) => {
  if (nextPagePath) {
    return (
      <div className="flex items-center group">
        <Link
          className={clsx(
            "tracking-widest uppercase font-bold font-info text-sm",
            `bg-black px-4 py-1 text-white`,
            "transition duration-700 transform group-hover:translate-x-0",
            "mr-6 translate-x-7"
          )}
          to={nextPagePath}
        >
          <span>Next</span>
        </Link>
        <ArrowNext className="text-current transition duration-700 transform scale-x-0  text-[30px] group-hover:scale-x-100 -ml-4" />
      </div>
    )
  } else {
    return <span />
  }
}

export const Pagination = ({ ctx }) => {
  const { humanPageNumber, nextPagePath, previousPagePath } = ctx
  // return empty string if there is only one page
  if (humanPageNumber === 1 && !nextPagePath) {
    return ""
  }
  return (
    <nav className="flex justify-between mt-16">
      {renderPreviousLink(previousPagePath)}
      <span
        aria-current="page"
        className={clsx(
          "page-numbers current",
          "font-bold font-info text-center"
        )}
      >
        {humanPageNumber}
      </span>
      {renderNextLink(nextPagePath)}
    </nav>
  )
}
