import React from 'react'
import { Alert as ChakraAlert, AlertIcon, AlertTitle } from '@chakra-ui/react'
export const ThankYou = ({ message }) => {
  return (
    <ChakraAlert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mb="6"
    >
      <AlertIcon boxSize="24px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="md">
        {message}
      </AlertTitle>
    </ChakraAlert>
  )
}
