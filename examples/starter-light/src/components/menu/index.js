import React from "react"
import { useMenuItems } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

export const Menu = ({ location = "PRIMARY", orientation, ...props }) => {
  const menuItems = useMenuItems(location)
  return <div>menu</div>
}
