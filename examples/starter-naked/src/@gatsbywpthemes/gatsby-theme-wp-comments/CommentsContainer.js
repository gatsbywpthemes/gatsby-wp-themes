import React from "react"

export const CommentsContainer = ({ children }) => {
  return (
    <section className="py-6 mt-10 bg-commentsBg dark:bg-dark-commentsBg text-commentsColor dark:text-dark-commentsColor sm:py-16 ">
      <div className="center-container">{children}</div>
    </section>
  )
}
