import React from "react";
import {
  useThemeOptions,
  useSiteSettings,
} from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks";
import { Link } from "gatsby";
import Logo from "./Logo";
export default function Header() {
  const siteSettings = useSiteSettings();
  const { addColorModes, logo } = useThemeOptions();
  return (
    <header className="sticky top-0 bg-gray-100 h-24 px-4 lg:px-0 lg:fixed z-10 lg:w-24 lg:h-full lg:pt-8 lg:pb-[6.5rem] items-center flex lg:flex-col justify-between text-gray-700">
      <div className="logo-wrapper lg:-rotate-90">
        {logo ? (
          <Logo />
        ) : (
          <Link to="/" className="text-[1.75rem] font-bold" rel="home">
            {siteSettings.title}
          </Link>
        )}
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
  );
}
