import React from "react"
import { Link } from "gatsby"

export const Author = ({ post, ...props }) => {
  const { name, slug } = post.author.node
  return (
    <Link
      className="font-bold hover:opacity-70"
      aria-label={`visit ${name} page`}
      to={`/author/${slug}`}
      {...props}
    >
      {name}
    </Link>
  )
}
