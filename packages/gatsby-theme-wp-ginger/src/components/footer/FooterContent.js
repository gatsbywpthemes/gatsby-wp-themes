import React from 'react'
import { useSiteSettings } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const FooterContent = () => {
  const siteSettings = useSiteSettings()
  return (
    <div>
      <div>
        © {new Date().getFullYear()} {siteSettings.title}
      </div>
      {` `}
      <div>
        Built with{` `}
        <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </div>
  )
}