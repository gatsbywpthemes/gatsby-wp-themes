import React from "react"
import { Footer } from "./footer"
import { Header } from "./header"
import clsx from "clsx"
import Helmet from "react-helmet"

export const Layout = ({ children, page, type = "page", ...props }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ""
  const pageTemplate = page?.headlesswp?.pageTemplate

  const fullWidthClass = pageTemplate === "full width" ? "fullWidth" : ""
  const devMode = process.env.NODE_ENV === "development"

  return (
    <div
      className={clsx(
        "flex min-h-full flex-col",
        `${layoutClass}-${type}`,
        fullWidthClass
      )}
    >
      <Helmet
        bodyAttributes={{
          class: devMode ? "debug-screens" : "",
        }}
      />
      <Header />
      <main
        className={`${
          pageTemplate !== "full width"
            ? "pt:5 xl:pt-16 pb-16 center-container max-w-lg"
            : "pb-16"
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
