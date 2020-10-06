import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { Grommet } from 'grommet'

import '../styles/scss/styles.scss'

export const Layout = ({ children, page, type = 'page' }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ''

  const pageTemplate = page && page.template ? page.template.templateName : ''

  const fullWidthClass =
    pageTemplate.toLowerCase() === 'full width' ? 'fullWidth' : ''

  return (
    <Grommet>
      <div className={`${layoutClass}-${type} ${fullWidthClass}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </Grommet>
  )
}
