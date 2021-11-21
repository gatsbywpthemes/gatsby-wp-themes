import React from "react"
import { MainMenu } from "../menu"
import { ColorSwitch } from "./ColorSwitch"
import { Branding } from "./Branding"
import { Slidemenu } from "./SlideMenu"
import Headroom from "react-headroom"
import clsx from "clsx"

export const Header = ({ ...props }) => {
  return (
    <Headroom className="z-10">
      <header
        className={clsx(
          "py-5 shadow-md relative",
          "bg-headerBg dark:bg-dark-headerBg",
          "text-headerColor dark:text-dark-headerColor"
        )}
        {...props}
      >
        <div className={"flex justify-between center-container"}>
          <Branding title="Starter Light" />
          <div className="flex items-center space-x-5">
            <MainMenu orientation="H" className="hidden md:flex" />
            <Slidemenu className="md:hidden" />
            <ColorSwitch />
          </div>
        </div>
      </header>
    </Headroom>
  )
}
