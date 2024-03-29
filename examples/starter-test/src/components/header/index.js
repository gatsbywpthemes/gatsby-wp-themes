import React from "react"
import { Menu } from "~/components/menu"
import { SearchModal } from "~/components/search/SearchModal"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-wp-data/src/hooks"
import { Slidemenu } from "./SlideMenu"

export const Header = () => {
  const { addWordPressSearch: search, addColorModes } = useThemeOptions()
  return (
    <div>
      <h1>Header</h1>
      {search && <SearchModal />}
      <Menu orientation="H" className="hidden md:flex" />
      <Slidemenu />
    </div>
  )
}
