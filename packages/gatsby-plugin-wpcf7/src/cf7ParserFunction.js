import React from "react"
import ContactForm7 from "./ContactForm7"

export const cf7ParserFunction = node => {
  if (node.name === "form" && node.attribs.class === "wpcf7-form") {
    return <ContactForm7 formObject={node} />
  }
}

export default cf7ParserFunction
