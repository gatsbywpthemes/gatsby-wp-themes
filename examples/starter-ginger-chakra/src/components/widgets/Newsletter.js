import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { WidgetContainer } from 'gingerThemeComponents'
import { Flex, Button } from '@chakra-ui/react'
import { Input } from 'gingerThemeUiComponents/Input'

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
    valid && (
      <WidgetContainer className="widget widget-newsletter" title="Newsletter">
        {msg ? (
          <p dangerouslySetInnerHTML={{ __html: msg }} />
        ) : (
          <Flex as="form" onSubmit={handleSubmit}>
            <Input
              placeholder="Email address"
              name="email"
              type="email"
              required
              value={email}
              onChange={handleChange}
              aria-label="Subscribe with your email address"
              height="auto"
            />
            <Button type="submit">Subscribe</Button>
          </Flex>
        )}
      </WidgetContainer>
    )
  )
}
