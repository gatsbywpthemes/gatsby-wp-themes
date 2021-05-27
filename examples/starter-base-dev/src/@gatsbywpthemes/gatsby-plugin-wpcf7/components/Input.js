import React from "react"
import { Input as ChakraInput } from "baseUiComponents"
import { chakra } from "@chakra-ui/react"

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  const inputComponentTypes = ["email", "url", "text", "tel", "date", "number"]
  if (inputComponentTypes.includes(props.type)) {
    return <ChakraInput className={className} {...props} ref={ref} />
  }
  return (
    <chakra.input
      className={className}
      fontSize="md"
      {...props}
      sx={{
        '&[type="range"]': {
          w: "100%",
        },
        '&[type="file"]': {
          py: 3,
        },
        '&[type="radio"], &[type="checkbox"]': {
          mr: 1,
          my: 2,
        },
      }}
      ref={ref}
    />
  )
})
