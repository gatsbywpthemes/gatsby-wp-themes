import React from "react"

export const CommentsContainer = ({ children }) => {
  return (
    <section className="py-8 text-white bg-commentsBg lg:py-16">
      <div className="max-w-lg px-4 mx-auto">{children}</div>
    </section>
  )
}
