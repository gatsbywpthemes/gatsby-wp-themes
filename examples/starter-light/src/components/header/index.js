import React from "react"
import { Menu } from "../menu"
import { Branding } from "./Branding"

export const Header = ({ ...props }) => {
  return (
    <header className={`py-4 shadow-md`} {...props}>
      <div className={`flex justify-between center-container`}>
        <Branding title="Starter Light" />
        <Menu />
      </div>
    </header>
  )
}
