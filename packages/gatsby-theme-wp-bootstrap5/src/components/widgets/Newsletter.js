import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { WidgetContainer } from './index'

export const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState()
  const valid = typeof __GATSBY_PLUGIN_MAILCHIMP_ADDRESS__ === 'string'
  const handleSubmit = (e) => {
    e.preventDefault()
    addToMailchimp(email)
      .then((data) => {
        setMsg(data.msg)
      })
      .catch((error) => console.log(error))
  }
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <>
      {valid && (
        <WidgetContainer className="widget widget-categories">
          <h2 className="widget-title h4">Newsletter</h2>
          {msg ? (
            <p dangerouslySetInnerHTML={{ __html: msg }} />
          ) : (
            <form className="input-group mb-3" onSubmit={handleSubmit}>
              <input
                className="form-control"
                placeholder="Email address"
                name="email"
                type="email"
                required
                value={email}
                onChange={handleChange}
                aria-label="Subsribe with your email address"
              />
              <button className="btn btn-secondary" type="submit">
                Subscribe
              </button>
            </form>
          )}
        </WidgetContainer>
      )}
    </>
  )
}
