import React from 'react'
import { Input as ChakraInput } from 'baseUiComponents'
import {
  chakra,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react'

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  const inputComponentTypes = ['email', 'url', 'text', 'tel', 'date']
  if (inputComponentTypes.includes(props.type)) {
    return <ChakraInput className={className} {...props} ref={ref} />
  }
  if (props.type === 'number') {
    return (
      <NumberInput
        className={className}
        {...props}
        borderColor="currentcolor"
        onChange={(value) =>
          props.onChange({
            type: 'change',
            target: { name: props.name, value, type: 'number' },
          })
        }
        clampValueOnBlur={false}
        ref={ref}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    )
  }
  if (props.type === 'range') {
    return (
      <Slider
        className={className}
        {...props}
        min={+props.min}
        max={+props.max}
        onChange={(value) =>
          props.onChange({
            type: 'change',
            target: { name: props.name, value, type: 'range' },
          })
        }
        onBlur={(value) => {
          props.onBlur({
            type: 'blur',
            target: { name: props.name, value, type: 'range' },
          })
        }}
        ref={ref}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    )
  }
  return (
    <chakra.input
      className={`${className}`}
      fontSize="md"
      {...props}
      sx={{
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

/*
export const Input = React.forwardRef(({ className, ...props }, ref) => {
  const inputComponentTypes = ['email', 'url', 'text', 'tel']
  if (inputComponentTypes.includes(props.type)) {
    return <ChakraInput className={className} {...props} ref={ref} />
  }

  return (
    <chakra.input
      className={className}
      {...props}
      sx={{
        '&[type="file"]': {
          pb: 3,
        },
        '&[type="radio"]': {
          ml: 1,
        },
        '&[type="checkbox"]': {
          mr: 1,
          my: 3,
        },
      }}
      ref={ref}
    />
  )
})
*/
