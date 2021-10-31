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
          className={`uppercase ${className}`}
          {...props}
        />
      ) : (
        <h2 {...props}>
          <Link
            to={`${uri}`}
            dangerouslySetInnerHTML={{ __html: title }}
            className={`uppercase hover:text-primary ${className}`}
          />
        </h2>
      )}
    </>
  )
}
