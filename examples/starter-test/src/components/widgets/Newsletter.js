import React from "react"
import { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export const Newsletter = (props) => {
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    addToMailchimp(email).then((data) => {
      return data.result === "success"
        ? setMsg(data.msg)
        : setMsg("This email has already subscribed, try with another one")
    })
  }
  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div {...props}>
      {msg ? (
        msg
      ) : (
        <>
          <h3 mb={5} className="widget-title">
            Newsletter
          </h3>
          <form className=" max-w-[400px] lg:mx-auto" onSubmit={handleSubmit}>
            <div className="flex">
              <div className="w-2/3">
                <input
                  placeholder="Email address"
                  name="email"
                  required
                  value={email}
                  onChange={handleChange}
                  aria-label="Add your Email address to subscribe"
                />
              </div>
              <div className="w-1/3">
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  )
}
