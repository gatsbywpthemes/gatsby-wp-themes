import React from "react"
import { Link } from "gatsby"

export const Button = ({ button }) => {
  const { title, url, target } = button || {}
  return (
    <>
      {target === "_blank" ? (
        <a className="btn btn-primary" href={url} rel="noopener noreferrer">
          {title}
        </a>
      ) : (
        <Link className="btn btn-primary" to={url}>
          {title}
        </Link>
      )}
    </>
  )
}
