import React from "react"
import { Link } from "gatsby"

export const PostEntryTitle = ({
  post,
  location,
  className = "",
  ...props
}) => {
  const { title, uri } = post

  return (
    <>
      {location === "single" ? (
        <h1
          dangerouslySetInnerHTML={{ __html: title }}
          className={`  ${className}`}
          {...props}
        />
      ) : (
        <h2 className={`text-xl md:text-4xl  ${className}`} {...props}>
          <Link to={`${uri}`} dangerouslySetInnerHTML={{ __html: title }} />
        </h2>
      )}
    </>
  )
}
