import React from 'react'

export const FooterContent = () => {
  return (
    <div>
      © {new Date().getFullYear()} | Built with{` `}
      <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  )
}
