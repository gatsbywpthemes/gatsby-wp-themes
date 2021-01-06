import React from 'react'

export const Form = ({ children, ...props }) => {
  return (
    <form
      className="contact-form mb-5 mx-auto"
      {...props}
      style={{ maxWidth: '40rem' }}
    >
      {children}
    </form>
  )
}
