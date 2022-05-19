import React from "react"
export const Form = (props) => {
  const { children, ...rest } = props
  return (
    <div
      className="flex flex-wrap justify-between p-4 mt-8  text-white max-w-lg mx-auto card lg:p-8"
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
