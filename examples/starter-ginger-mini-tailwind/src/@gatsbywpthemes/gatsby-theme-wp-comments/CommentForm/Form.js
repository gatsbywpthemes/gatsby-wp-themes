import React from "react"
export const Form = (props) => {
  const { children, ...rest } = props
  return (
    <div
      className="flex flex-wrap justify-between max-w-lg p-4 mx-auto mt-8 text-white card lg:p-8 bg-commentBg"
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
