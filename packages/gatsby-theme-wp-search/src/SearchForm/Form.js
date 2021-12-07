import React from "react"
import { FiSearch } from "react-icons/fi"
import { SubmitButton } from "./SubmitButton"

export const Form = (props) => {
  const { children, ...rest } = props
  return (
    <div>
      <FiSearch />
      <form {...rest}>
        <div>{children}</div>
        <SubmitButton />
      </form>
    </div>
  )
}
