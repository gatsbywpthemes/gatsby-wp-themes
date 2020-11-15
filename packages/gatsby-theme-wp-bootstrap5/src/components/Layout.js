// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Footer, Header } from './index'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/blocks.css'
import '../styles/custom-gutenstyles.css'

const MaybeWithContainer = ({ useContainer, children }) => {
  return !useContainer ? children : <div className="container">{children}</div>
}

const Layout = ({ useContainer = true, children, is404 = false }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className={is404 ? 'm-auto text-center' : undefined}>
        <MaybeWithContainer useContainer={useContainer}>
          {children}
        </MaybeWithContainer>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
