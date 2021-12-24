import React from "react"
import { Link } from "gatsby"

export const Button = ({ button, ...props }) => {
  const { title, url, target } = button || {}
  return (
    <>
      {target === "_blank" ? (
        <a href={url} rel="noopener noreferrer" {...props}>
          {title}
        </a>
      ) : (
        <Link to={url} {...props}>
          {title}
        </Link>
      )}
    </>
  )
}
