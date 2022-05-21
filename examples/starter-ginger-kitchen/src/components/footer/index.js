import React from "react"
import { useSiteSettings } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

export const Footer = () => {
  const siteSettings = useSiteSettings()

  return (
    <footer className="bg-footerBg dark:bg-dark-footerBg p-4 lg:p-[0.1px]">
      <div className="flex flex-col items-center justify-center space-y-1 text-sm whitespace-nowrap footer-link lg:hidden">
        <div>
          © {new Date().getFullYear()} {siteSettings.title}
        </div>
        <div>
          Built with{` `}
          <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  )
}
