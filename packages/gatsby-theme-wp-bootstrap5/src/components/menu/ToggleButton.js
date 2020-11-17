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
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-justify"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  )
}
