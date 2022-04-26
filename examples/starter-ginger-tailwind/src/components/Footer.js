import React from "react";
import { useSiteSettings } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks";
export default function Footer() {
  const siteSettings = useSiteSettings();

  return (
    <footer className="bg-gray-100 dark:bg-gray-700 p-4 lg:p-0.5">
      <div className="flex flex-col space-y-1 items-center justify-center whitespace-nowrap text-sm footer-link lg:hidden">
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
