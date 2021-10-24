import React from "react"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data-light/src/hooks"
import { Link } from "gatsby"

export const Branding = ({ title, ...props }) => {
  const { logo } = useThemeOptions()
  return (
    <div className="flex items-center h-full">
      {logo ? (
        <h3>logo</h3>
      ) : (
        <h1 className="mb-0 text-2xl tracking-wider uppercase" {...props}>
          <Link
            className="hover:no-underline text-gradient bg-gradient-to-r from-primary to-yellow"
            to="/"
            rel="home"
          >
            {title}
          </Link>
        </h1>
      )}
    </div>
  )
}
