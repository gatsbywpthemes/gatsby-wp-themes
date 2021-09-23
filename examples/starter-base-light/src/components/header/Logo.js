import React from "react"
import { Link, withPrefix } from "gatsby"

import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { GatsbyImage } from "gatsby-plugin-image"

export const Logo = () => {
  const { logo, darkModeLogo } = useThemeOptions()

  const img = logo
  return (
    <Link className="logo" to="/" rel="home">
      {logo && (
        <>
          {img.localFile ? (
            <GatsbyImage
              image={img.localFile.childImageSharp.gatsbyImageData}
              alt="logo"
            />
          ) : (
            <img src={withPrefix(logo)} alt="logo" />
          )}
        </>
      )}
    </Link>
  )
}
