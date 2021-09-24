import React from "react"
import { FooterContent } from "./index"
import { SocialFollows } from "../social"

export const Footer = () => (
  <footer className="shadow-md py-7 bg-footerBg dark:bg-dark-footerBg text-footerColor dark:text-dark-footerColor">
    <div className="container">
      <FooterContent className="mb-4" />
      <SocialFollows />
    </div>
  </footer>
)
