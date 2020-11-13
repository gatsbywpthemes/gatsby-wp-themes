import React from 'react'

export const WidgetContainer = ({ children, title, className, ...props }) => {
  return (
    <section
      className={`widget bg-light border p-3 mb-4 ${className}`}
      {...props}
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      {children}
    </section>
  )
}
