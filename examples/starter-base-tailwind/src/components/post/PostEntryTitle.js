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
          className={`mx-6 sm:mx-8 uppercase ${className}`}
          {...props}
        />
      ) : (
        <h2 className={`uppercase ${className}`} {...props}>
          <Link
            to={`${uri}`}
            dangerouslySetInnerHTML={{ __html: title }}
            className={`hover:text-primary`}
          />
        </h2>
      )}
    </>
  )
}
