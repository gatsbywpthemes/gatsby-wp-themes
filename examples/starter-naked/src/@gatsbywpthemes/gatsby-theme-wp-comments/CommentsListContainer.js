import React from "react"

export const CommentsListContainer = ({ children }) => {
  return (
    <section>
      <h2 className="mb-6 text-center">Comments</h2>
      <ul
        className="p-0 mb-12"
        css={{ ul: { ml: 6, p: 0 }, li: { listStyle: "none", mb: 6 } }}
      >
        {children}
      </ul>
    </section>
  )
}
