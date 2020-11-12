// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
import {
  useThemeOptions,
  useSiteSettings,
} from 'gatsby-theme-blog-data/src/hooks'
import { Footer } from './footer'
import { Header } from './header'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/blocks.css'
import '../styles/custom-gutenstyles.css'

const MaybeWithContainer = ({ useContainer, children }) => {
  return !useContainer ? children : <div className="container">{children}</div>
}

const Layout = ({ useContainer = true, children }) => {
  const siteSettings = useSiteSettings()
  const { addColorModes } = useThemeOptions()

  return (
    <>
      <Header />
      <main>
        <MaybeWithContainer useContainer={useContainer}>
          {children}
        </MaybeWithContainer>
      </main>
      <Footer />
    </>
  )
}

export default Layout
