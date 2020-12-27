import React from "react"
import { Box, Heading, useColorModeValue as colorMode } from "@chakra-ui/react"

export const ArchiveTitle = ({ name, text }) => {
  return (
    <>
      <Box
        px={[4, 8]}
        py={3}
        mb={10}
        borderRadius="full"
        display="inline-block"
        color="ultraLight"
        backgroundImage={`linear-gradient(60deg, tomato, #FCB458)`}
        className="archive-title"
        boxShadow="lg"
      >
        <Heading
          fontSize="xl"
          letterSpacing="wider"
          textTransform="uppercase"
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          {text} {name}
        </Heading>
      </Box>
    </>
  )
}
