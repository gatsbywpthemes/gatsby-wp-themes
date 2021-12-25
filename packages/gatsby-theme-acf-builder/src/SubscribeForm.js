import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export const SubscribeForm = ({ className, ...props }) => {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    addToMailchimp(email, { FNAME: firstName }).then((data) => {
      console.log("data", data)
      return data.result === "success"
        ? setMsg(data.msg)
        : setMsg("This email has already subscribed, try with another one")
    })
  }
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <>
      {msg ? (
        msg
      ) : (
        <form
          className={`subscribe-form ${className ? className : ""}`}
          onSubmit={handleSubmit}
          {...props}
        >
          <div className="subscribe-inputs">
            <input
              placeholder="first name"
              name="firstname"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              placeholder="Email address"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Subscribe</button>
        </form>
      )}
    </>
  )
}
