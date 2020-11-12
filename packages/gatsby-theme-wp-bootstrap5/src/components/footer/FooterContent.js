import React from 'react'
import { useSiteSettings } from 'gatsby-theme-blog-data/src/hooks'

export const FooterContent = () => {
  const siteSettings = useSiteSettings()
  return (
    <div>
      <div>
        © {new Date().getFullYear()}{' '}
        <span className="heading-font">{siteSettings.title}</span>
      </div>
      {` `}
      <small>
        Built with{` `}
        <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </small>
    </div>
  )
}
