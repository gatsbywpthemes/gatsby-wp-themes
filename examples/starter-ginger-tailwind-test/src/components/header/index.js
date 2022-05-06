import React from "react"
import { ColorSwitch } from "./ColorSwitch"
import {
  useThemeOptions,
  useSiteSettings,
} from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { Slidemenu } from "./Slidemenu"
import Logo from "./Logo"
import { Link } from "gatsby"
export const Header = () => {
  const siteSettings = useSiteSettings()
  const { logo } = useThemeOptions()

  return (
    <header className="sticky top-0 bg-gray-100 dark:bg-gray-800 dark:text-white h-24 px-4 lg:px-0 lg:fixed z-10 lg:w-24 lg:h-full lg:pt-10 lg:pb-[6.5rem] items-center flex lg:flex-col justify-between text-gray-700">
      <div className="logo-wrapper lg:-rotate-90">
        {logo ? (
          <Logo />
        ) : (
          <Link to="/" className="text-[1.75rem] font-bold" rel="home">
            {siteSettings.title}
          </Link>
        )}
      </div>
      <div className="buttons flex items-center space-x-4 fixed top-0 right-0 h-24 pr-4">
        <ColorSwitch />
        <Slidemenu />
      </div>
      <div className="hidden lg:flex flex-col space-y-1 -rotate-90 whitespace-nowrap text-sm footer-link">
        <div>
          © {new Date().getFullYear()} {siteSettings.title}
        </div>
        <div>
          Built with{` `}
          <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </header>
  )
}
