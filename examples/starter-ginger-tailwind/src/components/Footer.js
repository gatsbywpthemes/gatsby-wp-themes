import React from "react";
import { useSiteSettings } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks";
export default function Footer() {
  const siteSettings = useSiteSettings();

  return (
    <footer className="bg-gray-100 h-20 px-4 lg:hidden ">
      <div className="flex flex-col space-y-1 items-center justify-center whitespace-nowrap text-sm footer-link h-full">
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
  );
}
