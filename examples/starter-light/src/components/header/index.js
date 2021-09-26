import React from "react"
import { MainMenu } from "../menu"
import { Branding } from "./Branding"

export const Header = ({ ...props }) => {
  return (
    <header className={`py-4 shadow-md relative`} {...props}>
      <div className={`flex justify-between center-container`}>
        <Branding title="Starter Light" />
        <MainMenu orientation="H" />
      </div>
    </header>
  )
}
