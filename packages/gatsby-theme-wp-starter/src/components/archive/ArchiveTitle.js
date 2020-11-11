import React from 'react'

export const ArchiveTitle = ({ name, text }) => {
  return (
    <div className="archive-title">
      <h1>
        {text} {name}
      </h1>
    </div>
  )
}
