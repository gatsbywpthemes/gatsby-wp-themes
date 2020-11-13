import React from 'react'

export const ToggleButton = ({ handler }) => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={handler}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  )
}
