import React from "react"

export const CommentsListContainer = ({ children }) => {
  return (
    <div className="max-w-lg mx-auto  px-4">
      <h2 className="mb-6 text-center">Comments</h2>
      <ul
        className="p-0 mb-12"
        css={{
          ul: { marginLeft: 25, padding: 0 },
          li: { listStyle: "none", marginBottom: 2 },
        }}
      >
        {children}
      </ul>
    </div>
  )
}
