import React, { useEffect } from "react"
import Prism from "prismjs"

export const ActivateScriptsPage = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  }, [])
  return <></>
}