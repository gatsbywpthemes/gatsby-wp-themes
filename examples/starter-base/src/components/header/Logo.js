import React from "react"
import { Link, withPrefix } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import useDarkMode from "use-dark-mode"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

export const Logo = () => {
  const { logo, darkModeLogo } = useThemeOptions()
  const darkMode = useDarkMode(false)
  const img = darkMode.value && darkModeLogo ? darkModeLogo : logo

  return (
    <Link className="logo" to="/" rel="home">
      {logo && (
        <>
          {img.localFile ? (
            <GatsbyImage
              image={img.localFile.childImageSharp?.gatsbyImageData}
              alt="logo"
            />
          ) : (
            <img
              className="logo-img"
              src={
                darkMode.value && darkModeLogo
                  ? withPrefix(darkModeLogo)
                  : withPrefix(logo)
              }
              alt="logo"
            />
          )}
        </>
      )}
    </Link>
  )
}
