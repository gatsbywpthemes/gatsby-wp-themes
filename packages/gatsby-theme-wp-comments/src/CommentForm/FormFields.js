import React from "react"
import { inputFields } from "./inputfields"
import { Error } from "./Error"

export const FormFields = ({ register, errors }) => {
  return inputFields.map((el) => {
    const Tag = el.tag
    return (
      <div>
        <label htmlFor={el.name}>
          {el.label}
          <Tag
            {...register(el.name, {
              required: el.required,
              pattern: el.pattern,
            })}
            type={el.type}
            id={el.name}
            placeholder={el.placeholder}
            aria-required={el.required}
          />
        </label>
        {errors[el.name]?.type === "required" && <Error>Required</Error>}
        {errors[el.name]?.type === "pattern" && <Error>Invalid value</Error>}
      </div>
    )
  })
}
