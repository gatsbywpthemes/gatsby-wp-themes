import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { WidgetContainer } from './index'
import {
  Box,
  Flex,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

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
              aria-label="Subsribe with your email address"
              layerStyle="input"
            />
            <button type="submit">Subscribe</button>
          </Flex>
        )}
      </WidgetContainer>
    )
  )
}
