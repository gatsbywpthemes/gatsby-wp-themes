import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { domToReact } from "html-react-parser"
import useWordPressSettings from "./hooks/useWordPressSettings"
import cf7ParserOptions from "./cf7ParserOptions"
import { Form, Alert } from "./components"
import { ThankYou } from "./components/ThankYou"

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
  const { register, handleSubmit, setError, clearErrors, formState } = useForm()
  const { errors, isSubmitSuccessful, isSubmited } = formState
  const [feedBackSuccessMessage, setFeedBackSuccessMessage] = useState("")
  const [alertMessages, setAlertMessages] = useState([])
  const registeredFileInputs = []

  const parserOptions = cf7ParserOptions({
    register,
    errors,
    registeredFileInputs,
    isSubmited,
    setError,
    clearErrors,
  })

  const onSubmit = (data) => {
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
        if (data.status === "mail_sent") {
          setFeedBackSuccessMessage(data.message)
          setAlertMessages([])
        } else {
          const fieldsMessages =
            data.invalid_fields?.map((el) => el.message) || []
          setAlertMessages([data.message, ...fieldsMessages])
        }
      })
      .catch((err) => {
        console.error(err)
        setAlertMessages([err.message])
      })
  }
  return (
    <>
      {!!findId && (
        <>
          {isSubmitSuccessful && feedBackSuccessMessage ? (
            <ThankYou message={feedBackSuccessMessage} />
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              {domToReact(formObject.children, parserOptions)}
              {alertMessages.length > 0 && (
                <Alert
                  alertMessages={alertMessages}
                  setAlertMessages={setAlertMessages}
                />
              )}
            </Form>
          )}
        </>
      )}
    </>
  )
}

export default ContactForm7
