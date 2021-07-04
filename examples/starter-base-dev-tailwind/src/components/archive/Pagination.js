import React from "react"
import { Link } from "gatsby"
import { TextSpecial } from "baseUiComponents"
import clsx from "clsx"

const renderPreviousLink = (previousPagePath) => {
  if (previousPagePath) {
    return (
      <Link
        css={{ ...linkStyles }}
        className="text-left newer"
        to={previousPagePath}
      >
        <span>Previous</span>
      </Link>
    )
  } else {
    return <span />
  }
}

const renderNextLink = (nextPagePath) => {
  if (nextPagePath) {
    return (
      <Link
        textAlign="right"
        css={{ ...linkStyles }}
        className="text-right older"
        to={nextPagePath}
      >
        <span>Next</span>
      </Link>
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
    <TextSpecial
      as="nav"
      mt={10}
      className={clsx(
        "group",
        "flex justify-between",
        "overflow-hidden",
        "mt-10"
      )}
      css={{ ">*": { flex: 1 } }}
    >
      {renderPreviousLink(previousPagePath)}
      <span
        aria-current="page"
        className={clsx(
          "page-numbers current",
          "font-bold text-center",
          "group-hover:text-dark dark:group-hover:text-light"
        )}
      >
        {humanPageNumber}
      </span>
      {renderNextLink(nextPagePath)}
    </TextSpecial>
  )
}

const linkStyles = {
  transition: ".6s",
  fontWeight: "bold",
  "&.older": {
    transform: "translate3d(1.75rem, 0, 0)",
    mr: [4, 0],
  },
  "&.newer": {
    transform: "translate3d(-1.75rem, 0, 0)",
    ml: [4, 0],
  },
  ":hover": {
    transform: "translate3d(0, 0, 0)",
    textDecoration: "none",
  },
  "&.newer::before,&.older::after": {
    content: '""',
    width: "1.5rem",
    height: "1px",
    mr: "0.25rem",
    bg: "currentColor",
    display: "inline-block",
    verticalAlign: "middle",
    transition: "0.6s",
    transform: "scaleX(0)",
  },
  ":hover::before, :hover::after": {
    transform: "scaleX(1)",
  },
}
