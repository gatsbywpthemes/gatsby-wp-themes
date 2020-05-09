/** @jsx jsx */
import { jsx, Box, Flex, Input } from 'theme-ui'
import { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { widgetStyles } from '../../styles'

export const Newsletter = props => {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState()
  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email).then(data => {
      return data.result === 'success'
        ? setMsg(data.msg)
        : setMsg('This email has already subscribed, try with another one')
    })
  }
  const handleChange = e => {
    setEmail(e.target.value)
  }
  return (
    <Box
      sx={{
        ...widgetStyles.newsletter,
      }}
      {...props}
    >
      {msg ? (
        msg
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="widget-title">Newsletter</h2>
          <Flex>
            <Input
              placeholder="Email address"
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
              sx={{ borderRadius: '5px 0 0 5px' }}
              aria-label="Add your Email address to subsribe"
            />
            <button type="submit">Subscribe</button>
          </Flex>
        </form>
      )}
    </Box>
  )
}
