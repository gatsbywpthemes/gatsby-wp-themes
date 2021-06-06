import React from "react"
import { Container } from "baseUiComponents"
import { FooterContent } from "baseComponents"
import { SocialFollows } from "baseComponents"

export const Footer = () => (
  <footer className="shadow-md py-7 bg-footerBg dark:bg-dark-footerBg text-footerColor dark:text-dark-footerColor">
    <Container>
      <FooterContent className="mb-4" />
      <SocialFollows />
    </Container>
  </footer>
)
