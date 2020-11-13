import React from 'react'

export const ArchiveTitle = ({ name, text }) => {
  return (
    <h1 className="text-center mb-5">
      <span className="d-block h6 lh-1">{text}</span>
      <span className="">{name}</span>
    </h1>
  )
}
