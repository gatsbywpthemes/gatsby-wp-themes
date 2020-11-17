import React from 'react'

export const Label = ({ className, children, ...props }) => {
  className = className
    ? `${className} d-block meta-data text-uppercase fw-bold`
    : `d-block meta-data text-uppercase fw-bold`
  return (
    <label className={className} {...props}>
      {children}
    </label>
  )
}
