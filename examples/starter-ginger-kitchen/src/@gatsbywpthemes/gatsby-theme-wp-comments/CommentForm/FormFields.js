import React from 'react'
import { FormErrorMessage, FormLabel, FormControl } from '@chakra-ui/react'
import { Input } from 'gingerThemeUiComponents/Input'
import { inputFields } from '@gatsbywpthemes/gatsby-theme-wp-comments/src/CommentForm/inputfields'
import { Error } from '@gatsbywpthemes/gatsby-theme-wp-comments/src/CommentForm/Error'

export const FormFields = ({ register, errors }) => {
  return inputFields.map((el) => {
    const Tag = el.tag
    const pStyles =
      Tag === 'textarea'
        ? {
            w: 'full',
          }
        : {
            w: ['full', 'calc(50% - 1rem)'],
          }
    const textarea = Tag === 'textarea' ? { rows: 6, cols: 48, h: 'auto' } : {}
    return (
      <FormControl
        key={el.name}
        isInvalid={errors[el.name]}
        mb="6"
        {...pStyles}
      >
        <FormLabel
          textStyle="special"
          fontWeight="bold"
          htmlFor={el.name}
          mb="0"
        >
          {el.label}
          <Input
            as={Tag}
            d="block"
            {...register(el.name, {
              required: el.required,
              pattern: el.pattern,
            })}
            type={el.type}
            id={el.name}
            placeholder={el.placeholder}
            aria-required={el.required}
            {...textarea}
          />
        </FormLabel>
        <FormErrorMessage fontStyle="italic" mt="0">
          {errors[el.name]?.type === 'required' && <Error>Required</Error>}
          {errors[el.name]?.type === 'pattern' && <Error>Invalid value</Error>}
        </FormErrorMessage>
      </FormControl>
    )
  })
}
