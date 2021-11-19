import React from "react"
import { Link } from "gatsby"

export const Branding = ({ title, ...props }) => {
  return (
    <div className="flex items-center h-full">
      <h1 className="mb-0 text-2xl tracking-wider uppercase" {...props}>
        <Link
          className="hover:no-underline text-gradient bg-gradient-to-r from-primary to-yellow"
          to="/"
          rel="home"
        >
          {title}
        </Link>
      </h1>
    </div>
  )
}
