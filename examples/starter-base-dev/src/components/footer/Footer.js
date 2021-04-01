import React from "react"
import { Box, useColorModeValue as colorMode } from "@chakra-ui/react"
import { Container } from "baseUiComponents"

import { FooterContent } from "baseComponents"
import { SocialFollows } from "baseComponents"

export const Footer = () => (
  <Box
    as="footer"
    py={7}
    boxShadow="md"
    bg={colorMode("footerBg", "modes.dark.footerBg")}
    color={colorMode("footerColor", "modes.dark.footerColor")}
  >
    <Container>
      <FooterContent mb={4} />
      <SocialFollows />
    </Container>
  </Box>
)
