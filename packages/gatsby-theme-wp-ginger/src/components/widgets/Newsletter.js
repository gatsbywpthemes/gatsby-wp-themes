/** @jsx jsx */
import React from 'react'
import { jsx, Box, Flex, Input } from 'theme-ui'
import { useState } from 'react'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { widgetNewsletter } from '../../styles/widget'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState()
  const valid = typeof __GATSBY_PLUGIN_MAILCHIMP_ADDRESS__ === 'string'
  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
      .then(data => {
        setMsg(data.msg)
      })
      .catch(error => console.log(error))
  }
  const handleChange = e => {
    setEmail(e.target.value)
  }
  return (
    <>
      {valid && (
        <Box sx={{ ...widgetNewsletter }}>
          <h2 className="widget-title">Newsletter</h2>
          {msg ? (
            <p dangerouslySetInnerHTML={{ __html: msg }} />
          ) : (
            <form onSubmit={handleSubmit}>
              <Input
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
        </Box>
      )}
    </>
  )
}

export default Newsletter
