import React from 'react'
import { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export const Newsletter = (props) => {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    addToMailchimp(email).then((data) => {
      return data.result === 'success'
        ? setMsg(data.msg)
        : setMsg('This email has already subscribed, try with another one')
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
        <form onSubmit={handleSubmit}>
          <h2 className="widget-title">Newsletter</h2>
          <div>
            <input
              placeholder="Email address"
              name="email"
              type="email"
              required
              value={email}
              onChange={handleChange}
              aria-label="Add your Email address to subsribe"
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      )}
    </div>
  )
}
