import React from "react"
import { SubmitButton } from "@gatsbywpthemes/gatsby-theme-wp-search/src/SearchForm/SubmitButton"

export const Form = (props) => {
  const { children, ...rest } = props
  return (
    <div className="mb-6">
      <form className="flex max-h-[45px]" {...rest}>
        <div className="flex flex-1">{children}</div>
        <SubmitButton />
      </form>
    </div>
  )
}
