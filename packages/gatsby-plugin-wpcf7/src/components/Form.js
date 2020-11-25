import React from "react"

export const Form = ({ children, ...props }) => {
  return (
    <form className="contact-form" {...props}>
      {children}
    </form>
  )
}
