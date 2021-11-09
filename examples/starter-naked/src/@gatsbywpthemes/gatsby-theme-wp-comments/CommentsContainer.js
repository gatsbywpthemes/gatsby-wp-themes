import React from "react"

export const CommentsContainer = ({ children }) => {
  return (
    <section className="py-6 bg-comments bg-commentsBg dark:bg-dark-commentsBg text-commentsColor dark:text-dark-commentsColor sm:py-16">
      <div className="max-w-xl center-container">{children}</div>
    </section>
  )
}
