import React from "react"
import { Footer } from "./footer"
import { Header } from "./header"
import clsx from "clsx"

export const Layout = ({ children, page, type = "page", ...props }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ""

  return (
    <div
      className={clsx("flex min-h-screen flex-col", `${layoutClass}-${type}`)}
    >
      <Header />
      <main className="max-w-lg py-5 sm:py-16 center-container">
        {children}
      </main>
      <Footer />
    </div>
  )
}
