import React from 'react'
import { Input as ChakraInput } from 'gingerThemeUiComponents/Input'
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
      className={className}
      {...props}
      sx={{
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
