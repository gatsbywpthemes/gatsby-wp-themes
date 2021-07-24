import React from "react"

export const BorderTitle = (props) => (
  <div
    className="flex justify-center font-bold tracking-widest text-center uppercase"
    css={{
      ":after, :before": {
        content: '""',
        height: "1px",
        borderTop: "1px solid",
        flex: "1 0",
      },
      ":after": {
        ml: 4,
      },
      ":before": {
        mr: 4,
      },
    }}
    {...props}
  />
)
