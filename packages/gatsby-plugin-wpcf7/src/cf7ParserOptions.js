/* eslint-disable no-useless-escape */
import React from 'react'
import { domToReact } from 'html-react-parser'

const pattern = node => {
  switch (node.attribs.type) {
    case 'email':
      return node.attribs['aria-required']
        ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        : /^$|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    case 'url':
      return node.attribs['aria-required']
        ? /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i
        : /^$|(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i
    case 'tel':
      return node.attribs['aria-required']
        ? /^[+]?[0-9()/ -]*$/i
        : /^$|[+]?[0-9()/ -]*$/i
    case 'date':
      return node.attribs['aria-required']
        ? /^([0-9]{4,})-([0-9]{2})-([0-9]{2})$/i
        : /^$|([0-9]{4,})-([0-9]{2})-([0-9]{2})$/i
    case 'file':
      const accept = node.attribs.accept
        ? node.attribs.accept.split(',').join('|')
        : ''

      return node.attribs['aria-required']
        ? new RegExp(`${accept}$`, 'i')
        : new RegExp(`^$|${accept}$`, 'i')
    default:
      return null
  }
}

const findInnerInputType = node => {
  let value = null
  if (node && node.name === 'textarea') {
    return ['textarea', node.attribs.name]
  }
  if (node && node.name === 'select') {
    return ['select', node.attribs.name]
  }
  if (node && node.name === 'input') {
    return [node.attribs.type, node.attribs.name]
  }
  if (node.children) {
    node.children.some(child => (value = findInnerInputType(child)))
  }
  return value
}

const cf7ParserOptions = ({
  register,
  errors,
  registeredCheckboxes,
  registeredFileInputs,
  isSubmitting,
}) => {
  const parserOptions = {
    replace: domNode => {
      switch (domNode.name) {
        case 'span':
          return <>{domToReact(domNode.children, parserOptions)}</>
        case 'p':
          const innerFieldType = findInnerInputType(domNode)
          if (innerFieldType) {
            if (innerFieldType[0] === 'submit') {
              return <>{domToReact(domNode.children, parserOptions)}</>
            } else {
              return (
                <p
                  className={`form-field form-field-${innerFieldType[0]} form-field-${innerFieldType[1]}`}
                >
                  {domToReact(domNode.children, parserOptions)}
                </p>
              )
            }
          }
          break
        case 'input':
          if (domNode.attribs.type === 'file') {
            registeredFileInputs.push(domNode.attribs.name)
          }
          switch (domNode.attribs.type) {
            case 'hidden':
              /* we probably don't need the hidden fields from the wp form */
              return <></>
            case 'submit':
              return (
                <button
                  className="submit-button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {domNode.attribs.value}
                </button>
              )
            default:
              if (domNode.attribs.type === 'checkbox') {
                const currentName = domNode.attribs.name
                const index = registeredCheckboxes
                  .map(el => el.name)
                  .indexOf(currentName)
                if (index === -1) {
                  registeredCheckboxes.push({ name: currentName, counter: 0 })
                  domNode.attribs.newName = `${currentName}[0]`
                } else {
                  registeredCheckboxes[index].counter =
                    registeredCheckboxes[index].counter + 1
                  domNode.attribs.newName = `${currentName}[${registeredCheckboxes[index].counter}]`
                }
              }
              return (
                <>
                  <input
                    id={domNode.attribs.newName || domNode.attribs.name}
                    className={domNode.attribs.class}
                    type={domNode.attribs.type}
                    name={domNode.attribs.newName || domNode.attribs.name}
                    placeholder={domNode.attribs.placeholder}
                    min={domNode.attribs.min}
                    max={domNode.attribs.max}
                    ref={register({
                      required: !!domNode.attribs['aria-required'],
                      pattern: pattern(domNode),
                      min: domNode.attribs.min,
                      max: domNode.attribs.max,
                    })}
                    defaultValue={domNode.attribs.value || ''}
                    defaultChecked={domNode.attribs.checked || ''}
                  />
                  {errors[domNode.attribs.name] &&
                    errors[domNode.attribs.name].type === 'required' && (
                      <span className="error">Required</span>
                    )}
                  {errors[domNode.attribs.name] &&
                    errors[domNode.attribs.name].type !== 'required' && (
                      <span className="error">Invalid value</span>
                    )}
                </>
              )
          }
        case 'select':
          return (
            <select
              name={domNode.attribs.name}
              id={domNode.attribs.name}
              ref={register({
                required: !!domNode.attribs['aria-required'],
              })}
            >
              {domToReact(domNode.children, parserOptions)}
            </select>
          )
        case 'option':
          return (
            <option defaultValue={domNode.attribs.value}>
              {domNode.attribs.value}
            </option>
          )
        case 'textarea':
          return (
            <>
              <textarea
                name={domNode.attribs.name}
                id={domNode.attribs.name}
                ref={register({ required: !!domNode.attribs['aria-required'] })}
                rows="6"
                cols="48"
              ></textarea>
              {errors[domNode.attribs.name] &&
                errors[domNode.attribs.name].type === 'required' && (
                  <span className="error">Required</span>
                )}
            </>
          )
        default:
          break
      }
    },
  }
  return parserOptions
}

export default cf7ParserOptions
