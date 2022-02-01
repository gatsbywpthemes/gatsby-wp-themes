import React from 'react'
import { Input as ChakraInput } from 'gingerThemeUiComponents/Input'
import { chakra } from '@chakra-ui/react'
export const Input = React.forwardRef(({ className, ...props }, ref) => {
  const inputComponentTypes = ['email', 'url', 'text', 'tel', 'date', 'number']
  if (inputComponentTypes.includes(props.type)) {
    return <ChakraInput className={className} {...props} ref={ref} />
  }
  return (
    <chakra.input
      className={className}
      {...props}
      sx={{
        '&[type="range"]': {
          w: '100%',
        },
        '&[type="file"]': {
          pb: 3,
        },
        '&[type="checkbox"], &[type="radio"]': {
          mx: 2,
          my: 2,
        },
      }}
      ref={ref}
    />
  )
})
