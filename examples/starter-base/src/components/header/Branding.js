import React from "react"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ls from "local-storage"

export const Branding = ({ title, ...props }) => {
  const { logo, darkModeLogo } = useThemeOptions()
  const darkMode = ls.get("darkMode")
  const img = darkMode && darkModeLogo ? darkModeLogo : logo

  return (
    <div className="flex items-center h-full">
      {logo ? (
        <GatsbyImage
          image={img.localFile.childImageSharp.gatsbyImageData}
          alt="logo"
        />
      ) : (
        <h1 className="mb-0 text-2xl tracking-wider uppercase" {...props}>
          <Link
            className="hover:text-accentColor hover:no-underline"
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
