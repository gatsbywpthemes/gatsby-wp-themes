import React from "react"
import { ColorSwitch } from "./ColorSwitch"
import {
  useThemeOptions,
  useSiteSettings,
} from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { SlideMenu } from "./SlideMenu"
import Logo from "./Logo"
import { Link } from "gatsby"
export const Header = () => {
  const siteSettings = useSiteSettings()
  const { logo } = useThemeOptions()

  return (
    <header className="sticky top-0 bg-headerBg dark:bg-dark-headerBg text-headerColor dark:text-dark-headerColor h-24 px-4 lg:px-0 lg:fixed z-10 lg:w-24 lg:h-full lg:pt-10 lg:pb-[6.5rem] items-center flex lg:flex-col justify-between ">
      <div className="logo-wrapper lg:-rotate-90">
        {logo ? (
          <Logo />
        ) : (
          <Link to="/" className="text-[1.75rem] font-bold" rel="home">
            {siteSettings.title}
          </Link>
        )}
      </div>
      <div className="fixed top-0 right-0 flex items-center h-24 pr-4 space-x-4 buttons">
        <ColorSwitch />
        <SlideMenu />
      </div>
      <div className="flex-col hidden space-y-1 text-sm -rotate-90 lg:flex whitespace-nowrap footer-link">
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
