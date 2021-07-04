import React from "react"
import { Link } from "gatsby"

const LinkButton = (props) => (
  <Link className="tracking-widest uppercase prev" {...props} />
)
const renderPreviousLink = ({ prev }) => {
  let previousLink = null
  if (!prev) {
    return <span />
  } else {
    previousLink = `${prev}`
  }

  return (
    <LinkButton
      className="previous"
      css={{ ...linkStyles }}
      to={previousLink}
      aria-label="visit previous post"
    >
      <span>Previous</span>
    </LinkButton>
  )
}

const renderNextLink = ({ next }) => {
  if (next) {
    return (
      <LinkButton
        className="next"
        css={{ ...linkStyles }}
        aria-label="visit next post"
        to={`${next}`}
      >
        <span>Next</span>
      </LinkButton>
    )
  } else {
    return <span />
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

const linkStyles = {
  transition: ".6s",
  fontWeight: "bold",
  "&.next": {
    transform: "translate3d(1.75rem, 0, 0)",
    mr: [4, 0],
  },
  "&.previous": {
    transform: "translate3d(-1.75rem, 0, 0)",
    ml: [4, 0],
  },
  ":hover": {
    transform: "translate3d(0, 0, 0)",
    textDecoration: "none",
  },
  "&.previous::before,&.next::after": {
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
