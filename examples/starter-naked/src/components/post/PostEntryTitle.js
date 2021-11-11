import React from "react"
import { Link } from "gatsby"

export const PostEntryTitle = ({ post, location, ...props }) => {
  const { title, uri } = post

  return (
    <>
      {location === "single" ? (
        <h1
          className="mx-6 sm:mx-8"
          dangerouslySetInnerHTML={{ __html: title }}
          {...props}
        />
      ) : (
        <h2 {...props}>
          <Link to={`${uri}`} dangerouslySetInnerHTML={{ __html: title }} />
        </h2>
      )}
    </>
  )
}
