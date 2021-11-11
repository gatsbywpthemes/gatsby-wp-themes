import React from "react"
import { Link } from "gatsby"

export const PostEntryTitle = ({ post, location, ...props }) => {
  const { title, uri } = post

  return (
    <>
      {location === "single" ? (
        <h1
          dangerouslySetInnerHTML={{ __html: title }}
          {...props}
          className="uppercase mx-6 sm:mx-8"
        />
      ) : (
        <h2 {...props}>
          <Link
            to={`${uri}`}
            dangerouslySetInnerHTML={{ __html: title }}
            className="uppercase hover:text-secondary dark:hover:text-primary"
          />
        </h2>
      )}
    </>
  )
}
