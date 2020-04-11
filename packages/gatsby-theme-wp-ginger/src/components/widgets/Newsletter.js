/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { jsx } from 'theme-ui'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { widgetNewsletter } from '../../styles/widget'

const Newsletter = () => {
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
        <div sx={{ ...widgetNewsletter }}>
          <h2 className="widget-title">Newsletter</h2>
          {msg ? (
            <p dangerouslySetInnerHTML={{ __html: msg }} />
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Email address"
                name="email"
                type="email"
                required
                value={email}
                onChange={handleChange}
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      )}
    </>
  )
}

export default Newsletter
