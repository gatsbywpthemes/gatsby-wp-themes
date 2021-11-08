import React from "react"

export const Form = (props) => {
  const { children, ...rest } = props
  return <form {...rest}>{children}</form>
}
