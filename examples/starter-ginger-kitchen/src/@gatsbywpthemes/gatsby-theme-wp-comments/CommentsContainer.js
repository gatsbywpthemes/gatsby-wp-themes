import React from "react"

export const CommentsContainer = ({ children }) => {
  return (
    <section className="bg-[#303030] text-white py-8 lg:py-16">
      <div className="max-w-lg mx-auto  px-4">{children}</div>
    </section>
  )
}
