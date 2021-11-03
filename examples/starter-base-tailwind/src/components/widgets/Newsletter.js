import React from "react"
import { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { WidgetTitle } from "./WidgetTitle"

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
          <WidgetTitle title="Newsletter" />
          <form
            maxWidth="400px"
            mx="auto"
            className=" max-w-[90%] sm:max-w-[400px] lg:mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex">
              <div className="w-2/3">
                <input
                  placeholder="Email address"
                  name="email"
                  required
                  value={email}
                  className="w-full h-10 px-5 border-0 rounded-none bg-nlInputBg dark:bg-dark-nlInputBg text-nlColor dark:text-dark-nlColor"
                  onChange={handleChange}
                  aria-label="Add your Email address to subscribe"
                />
              </div>
              <div className="w-1/3">
                <button
                  type="submit"
                  className="h-10 btn bg-nlButtonBg dark:bg-dark-nlButtonBg hover:bg-nlButtonHoverBg dark:hover:bg-dark-nlButtonHoverBg"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  )
}
