import React from "react"

export const CommentContainer = ({ children }) => {
  return (
    <div className="p-4 mb-6 transition duration-500 rounded-lg shadow-md comment hover:shadow-lg ">
      {children}
    </div>
  )
}
