import React from "react"
import { Footer } from "./footer"
import { Header } from "./header"
import clsx from "clsx"

export const Layout = ({ children, page, type = "page", ...props }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ""
  const pageTemplate = page?.headlesswp?.pageTemplate

  const fullWidthClass = pageTemplate === "full width" ? "fullWidth" : ""
  return (
    <div
      className={clsx(
        "flex min-h-full flex-col",
        `${layoutClass}-${type}`,
        fullWidthClass
      )}
    >
      <Header />
      <main
        className={`${
          pageTemplate !== "full width" ? "py-10 center-container max-w-lg" : ""
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
