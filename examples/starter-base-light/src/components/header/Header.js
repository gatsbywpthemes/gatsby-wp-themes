import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Menu, SiteBranding, SlideSidebar } from "baseComponents"
import { Container } from "baseUiComponents"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

import { ColorSwitch } from "baseComponents"

export const Header = () => {
  const { addColorModes } = useThemeOptions()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wp {
        generalSettings {
          title
          url
        }
      }
    }
  `)

  const { title } = data.wp.generalSettings

  return (
    <header className="py-4 shadow-md dark:text-dark-headerColor text-headerColor bg-headerBg dark:bg-dark-headerBg">
      <Container className="flex justify-between">
        <div className="flex items-center">
          <SiteBranding title={title} />
        </div>
        <div className="flex">
          <Menu orientation="H" className="hidden lg:block" />

          {addColorModes && <ColorSwitch />}
          <SlideSidebar className="lg:hidden" />
        </div>
      </Container>
    </header>
  )
}
