import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { domToReact } from "html-react-parser"
import useWordPressSettings from "./hooks/useWordPressSettings"
import cf7ParserOptions from "./cf7ParserOptions"
import { Form, Alert } from "./components"

const findId = (node) => {
  let value = null
  if (node.attribs && node.attribs.name === "_wpcf7") {
    return node.attribs.value
  }
  if (node.children) {
    node.children.some((child) => (value = findId(child)))
  }
  return value
}

const ContactForm7 = ({ formObject }) => {
  const { wordPressUrl } = useWordPressSettings()
  const formId = findId(formObject)
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitSuccessful },
  } = useForm()
  console.log(errors)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [alertState, setAlertState] = useState({
    visible: false,
    message: "",
    className: "",
  })
  const [key, setKey] = useState(1)
  const registeredFileInputs = []

  const parserOptions = cf7ParserOptions({
    register,
    errors,
    registeredFileInputs,
    isSubmitting,
    setError,
    clearErrors,
  })

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
      setKey((k) => -k)
    }
  }, [isSubmitSuccessful, reset])

  const onSubmit = (data, e) => {
    const url = `${wordPressUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`
    const formData = new FormData()

    Object.keys(data).forEach((el) => {
      if (
        typeof data[el] === "object" &&
        registeredFileInputs.indexOf(el) > -1
      ) {
        data[el] = data[el][0]
      } else {
        data[el] = data[el] ?? ""
      }
      formData.append(el, data[el])
    })
    setIsSubmitting(true)
    console.log(data)
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("We're sorry but the network response was not ok.")
        }
        return response.json()
      })
      .then((data) => {
        setAlertState({
          visible: true,
          message: data.message,
          className: data.status === "validation_failed" ? "danger" : "success",
        })
        setIsSubmitting(false)
      })
      .catch((err) => {
        console.error(err)
        setAlertState({
          visible: true,
          message: err.message,
          className: "danger",
        })
      })
  }
  return (
    <>
      {!!findId && (
        <>
          <Alert alertState={alertState} setAlertState={setAlertState} />
          <Form key={key} onSubmit={handleSubmit(onSubmit)}>
            {domToReact(formObject.children, parserOptions)}
          </Form>
        </>
      )}
    </>
  )
}

export default ContactForm7
