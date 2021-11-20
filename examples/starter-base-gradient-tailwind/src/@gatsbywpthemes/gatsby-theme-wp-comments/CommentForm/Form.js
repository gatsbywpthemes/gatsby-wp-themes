import React from "react"
export const Form = (props) => {
  const { children, ...rest } = props
  return (
    <div
      className="flex flex-wrap justify-between p-4 mt-8 rounded-lg card sm:p-8"
      css={{
        ".comment &": {
          boxShadow: "none",
        },
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
