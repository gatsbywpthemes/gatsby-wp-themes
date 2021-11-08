import React from "react"

export const CancelButton = (props) => {
  return (
    <button className="comment-button-cancel" onClick={props.onClick}>
      Cancel
    </button>
  )
}
