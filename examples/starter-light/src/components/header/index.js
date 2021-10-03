import React from "react"
import { MainMenu } from "../menu"
import { ColorSwitch } from "./ColorSwitch"
import { Branding } from "./Branding"
import { Slidemenu } from "./SlideMenu"

export const Header = ({ ...props }) => {
  return (
    <header className={`py-4 shadow-md relative`} {...props}>
      <div className={`flex justify-between center-container`}>
        <Branding title="Starter Light" />
        <div className="flex items-center space-x-5">
          <MainMenu orientation="H" className="hidden md:flex" />
          <Slidemenu className="md:hidden" />
          <ColorSwitch />
        </div>
      </div>
    </header>
  )
}
