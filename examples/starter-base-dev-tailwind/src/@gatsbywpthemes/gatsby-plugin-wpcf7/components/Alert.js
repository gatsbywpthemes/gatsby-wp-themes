import React, { useEffect, useRef } from "react"
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react"
export const Alert = ({ alertMessages, setAlertMessages }) => {
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setAlertMessages([])
    }, 8000)

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [setAlertMessages])

  return (
    <ChakraAlert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <AlertIcon boxSize="24px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="md">
        {alertMessages[0]}
      </AlertTitle>
      {alertMessages.slice(1).map((el, index) => (
        <AlertDescription key={index} maxWidth="sm" fontSize="sm">
          {el}
        </AlertDescription>
      ))}
    </ChakraAlert>
  )
}
