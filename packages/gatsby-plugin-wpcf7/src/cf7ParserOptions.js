/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react"
import { domToReact, attributesToProps } from "html-react-parser"
import {
  FormField,
  Label,
  Input,
  Textarea,
  Error,
  SubmitButton,
  Select,
} from "./components"

const pattern = (node) => {
  switch (node.attribs.type) {
    case "email":
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    case "url":
      return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i
    case "tel":
      return /^[+]?(?:\([0-9]+\)|[0-9]+)(?:[/ -]*(?:\([0-9]+\)|[0-9]+))*$/i
    case "date":
      return /^([0-9]{4,})-([0-9]{2})-([0-9]{2})$/i
    case "number":
      return /^\d+(\.\d+)?([eE]\d+)?$/i
    case "file":
      const accept = node.attribs.accept
        ? node.attribs.accept.split(",").join("|")
        : ".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav,.wmv"
            .split(",")
            .join("|")
      return new RegExp(`${accept}$`, "ig")
    default:
      return null
  }
}

const findInnerInputType = (node) => {
  let value = null
  if (node && node.name === "textarea") {
    return ["textarea", node.attribs.name]
  }
  if (node && node.name === "select") {
    return ["select", node.attribs.name]
  }
  if (node && node.name === "input") {
    return [node.attribs.type, node.attribs.name]
  }
  if (node.children) {
    node.children.some((child) => (value = findInnerInputType(child)))
  }
  return value
}

const cf7ParserOptions = ({
  register,
  errors,
  registeredFileInputs,
  isSubmited,
}) => {
  const validatesAsRequiredOptions = {
    replace: (domNode) => {
      const { value, checked, name, ...attribsToProps } = attributesToProps(
        domNode.attribs
      )
      switch (domNode.name) {
        case "span":
          return <>{domToReact(domNode.children, validatesAsRequiredOptions)}</>
        case "label":
          return (
            <Label {...attribsToProps}>
              {domToReact(domNode.children, validatesAsRequiredOptions)}
            </Label>
          )
        case "input": {
          const registerName = name?.split("[")[0]
          if (domNode.attribs.type === "checkbox") {
            return (
              <>
                <Input
                  {...attribsToProps}
                  {...register(registerName, {
                    validate: {
                      required: (v) => {
                        if (v === false) {
                          return false
                        }
                        if (typeof v === "object" && v.length === 0) {
                          return false
                        }
                        return true
                      },
                    },
                  })}
                  defaultValue={value || ""}
                  defaultChecked={checked || ""}
                />
              </>
            )
          }
        }
      }
    },
  }
  const parserOptions = {
    replace: (domNode) => {
      const { value, checked, name, ...attribsToProps } = attributesToProps(
        domNode.attribs
      )
      const registerName = name?.split("[")[0]
      switch (domNode.name) {
        case "span":
          if (
            domNode.attribs?.class.includes("wpcf7-validates-as-required") &&
            domNode.attribs?.class.includes("wpcf7-checkbox")
          ) {
            return (
              <>{domToReact(domNode.children, validatesAsRequiredOptions)}</>
            )
          }
          return <>{domToReact(domNode.children, parserOptions)}</>
        case "p":
          const innerFieldType = findInnerInputType(domNode)
          if (innerFieldType) {
            if (innerFieldType[0] === "submit") {
              return <>{domToReact(domNode.children, parserOptions)}</>
            } else {
              return (
                <FormField
                  className={`form-field form-field-${innerFieldType[0]} form-field-${innerFieldType[1]}`}
                >
                  {domToReact(domNode.children, parserOptions)}
                  {innerFieldType[1].endsWith("[]") && (
                    <Error error={errors[innerFieldType[1].split("[")[0]]} />
                  )}
                </FormField>
              )
            }
          }
          break
        case "label":
          return (
            <Label {...attribsToProps}>
              {domToReact(domNode.children, parserOptions)}
            </Label>
          )
        case "select":
          return (
            <>
              <Select
                {...attribsToProps}
                {...register(registerName, {
                  required: !!domNode.attribs["aria-required"],
                })}
              >
                {domToReact(domNode.children, parserOptions)}
              </Select>
              <Error error={errors[registerName]} />
            </>
          )
        case "option":
          return <option defaultValue={value}>{value}</option>
        case "textarea":
          return (
            <>
              <Textarea
                {...attribsToProps}
                {...register(name, {
                  required: !!domNode.attribs["aria-required"],
                })}
                rows="6"
                cols="48"
              />
              <Error error={errors[name]} />
            </>
          )
        case "input":
          if (domNode.attribs.type === "file") {
            registeredFileInputs.push(name)
          }
          switch (domNode.attribs.type) {
            case "submit":
              return <SubmitButton disabled={isSubmited}>{value}</SubmitButton>
            case "file": {
              const required = !!domNode.attribs["aria-required"]
              const acceptPattern = pattern(domNode)
              const sizeLimit = domNode.attribs.limit || 1048576
              return (
                <>
                  <Input
                    {...attribsToProps}
                    {...register(name, {
                      required,
                      validate: {
                        accept: (v) => {
                          if (!v[0]) {
                            return true
                          }
                          return !!v[0].name.match(acceptPattern)
                        },
                        filesize: (v) => {
                          if (!v[0]) {
                            return true
                          }
                          return v[0].size <= sizeLimit
                        },
                      },
                    })}
                    defaultValue={value || ""}
                  />
                  <Error error={errors[name]} />
                </>
              )
            }
            case "checkbox": {
              return (
                <>
                  <Input
                    {...attribsToProps}
                    {...register(registerName)}
                    defaultValue={value || ""}
                    defaultChecked={checked || ""}
                  />
                </>
              )
            }
            default:
              return (
                <>
                  <Input
                    {...attribsToProps}
                    {...register(registerName, {
                      required: !!domNode.attribs["aria-required"],
                      pattern: pattern(domNode),
                      min: domNode.attribs.min,
                      max: domNode.attribs.max,
                      minLength: domNode.attribs.minlength,
                      maxLength: domNode.attribs.maxlength,
                    })}
                    defaultValue={value || ""}
                    defaultChecked={checked || ""}
                  />
                  <Error error={errors[String(registerName)]} />
                </>
              )
          }
        default:
          break
      }
    },
  }
  return parserOptions
}

export default cf7ParserOptions
