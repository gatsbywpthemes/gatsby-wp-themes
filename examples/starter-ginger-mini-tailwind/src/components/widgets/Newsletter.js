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
  const { lightBg, ...rest } = props
  return (
    <div {...rest}>
      {msg ? (
        msg
      ) : (
        <>
          <WidgetTitle title="Newsletter" lightBg={lightBg} />
          <form
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
                  className="w-full !px-2 !py-0.5 bg-transparent border-0 border-b-2 h-10 focus:outline-none focus:ring-0 placeholder-nlColor dark:placeholder-dark-nlColor focus:placeholder-transparent"
                  onChange={handleChange}
                  aria-label="Add your Email address to subscribe"
                />
              </div>
              <div className="w-1/3">
                <button
                  type="submit"
                  className="flex items-center justify-center h-10 px-4 font-bold uppercase border-2"
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
