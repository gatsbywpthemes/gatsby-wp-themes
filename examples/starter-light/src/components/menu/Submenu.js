import React from "react"
import { CgChevronDown } from "react-icons/cg"
import { Collapse } from "../ui-components"
import { Menu } from "@headlessui/react"
import { MenuLink } from "./MenuLink"
import { MenuItem } from "./MenuItem"

const SubmenuV = ({ menuItem }) => {
  return (
    <div className={`relative has-submenu menu-item`} key={menuItem.id}>
      <Collapse trigger={menuItem.label}>
        <ul className="flex menuItemGroup sub-menu">
          {menuItem.children.map((item) => (
            <MenuItem key={item.id} menuItem={item} />
          ))}
        </ul>
      </Collapse>
    </div>
  )
}

const SubmenuH = ({ menuItem }) => {
  return (
    <Menu key={menuItem.id}>
      <Menu.Button className="menu-item hover:text-accentColor dark:hover:text-dark-accentColor">
        {menuItem.label}
        <CgChevronDown />
      </Menu.Button>

      <Menu.Items>
        {menuItem.children.map((item) => (
          <Menu.Item key={item.id}>
            {({ active }) => <MenuLink menuItem={item} />}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}

export const Submenu = ({ menuItem, orientation }) => {
  return orientation === "H" ? (
    <SubmenuH menuItem={menuItem} />
  ) : (
    <SubmenuV menuItem={menuItem} />
  )
}
