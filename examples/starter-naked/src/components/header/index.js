import React from "react"
import { MainMenu } from "../menu"
import { ColorSwitch } from "./ColorSwitch"
import { Branding } from "./Branding"
import { Slidemenu } from "./SlideMenu"
import { SearchModal } from "../search/SearchModal"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

import Headroom from "react-headroom"
import clsx from "clsx"

export const Header = ({ ...props }) => {
  const { addWordPressSearch: search, addColorModes } = useThemeOptions()

  return (
    <Headroom>
      <header
        className={clsx(
          "py-4 shadow-md relative",
          "bg-headerBg dark:bg-dark-headerBg",
          "text-headerColor dark:text-dark-headerColor"
        )}
        {...props}
      >
        <div className={"flex justify-between center-container"}>
          <Branding title="Starter Light" />
          {search && <SearchModal />}

          <div className="flex items-center space-x-5">
            <MainMenu orientation="H" className="hidden md:flex" />
            <Slidemenu className="md:hidden" />
            {addColorModes && <ColorSwitch />}
          </div>
        </div>
      </header>
    </Headroom>
  )
}
