import React from "react"

export const FooterContent = ({ className }, props) => {
  return (
    <div className={`text-center ${className ? className : ""}`} {...props}>
      © {new Date().getFullYear()} | Built with{`   `}
      <a
        href="https://www.wpgraphql.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        WPGraphQL
      </a>{" "}
      and{`  `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
    </div>
  )
}
