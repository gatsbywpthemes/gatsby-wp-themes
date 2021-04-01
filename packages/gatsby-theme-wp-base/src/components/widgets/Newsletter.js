import React from 'react'
import { useState } from 'react'
import { BorderTitle } from 'baseUiComponents'
import {
  Input,
  Button,
  chakra,
  Box,
  Flex,
  useColorModeValue as colorMode,
} from '@chakra-ui/react'
import { transparentize } from '@chakra-ui/theme-tools'

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
  const buttonBgColor = colorMode('nlButtonBg', 'modes.dark.nlButtonBg')
  const buttonBgHoverColor = colorMode(
    transparentize(`nlButtonBg`, 0.7),
    transparentize(`modes.dark.nlButtonBg`, 0.8)
  )
  return (
    <div {...props}>
      {msg ? (
        msg
      ) : (
        <>
          <BorderTitle mb={5} className="widget-title">
            Newsletter
          </BorderTitle>
          <chakra.form maxWidth="400px" mx="auto" onSubmit={handleSubmit}>
            <Flex>
              <Box width={2 / 3}>
                <Input
                  placeholder="Email address"
                  name="email"
                  type="email"
                  borderRadius="0"
                  required
                  value={email}
                  border="none"
                  bg={colorMode('nlInputBg', 'modes.dark.nlInputBg')}
                  onChange={handleChange}
                  aria-label="Add your Email address to subsribe"
                />
              </Box>
              <Box width={1 / 3}>
                <Button
                  variant="unstyled"
                  width="100%"
                  transition="background .4s "
                  bg={buttonBgColor}
                  _hover={{
                    bg: buttonBgHoverColor,
                  }}
                  color="white"
                  textTransform="uppercase"
                  fontSize="xs"
                  fontWeight="bold"
                  letterSpacing="wide"
                  type="submit"
                  borderRadius="0"
                  px={4}
                >
                  Subscribe
                </Button>
              </Box>
            </Flex>
          </chakra.form>
        </>
      )}
    </div>
  )
}
