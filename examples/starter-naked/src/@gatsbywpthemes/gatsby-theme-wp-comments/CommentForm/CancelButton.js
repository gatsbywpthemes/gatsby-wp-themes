import React from "react"

export const CancelButton = (props) => {
  return (
    <button
      className="flex ml-auto comment-button-cancel"
      onClick={props.onClick}
    >
      <span>Cancel</span>
    </button>
  )
}
