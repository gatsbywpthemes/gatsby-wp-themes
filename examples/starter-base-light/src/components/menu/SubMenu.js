import React from "react"
import { CgChevronDown } from "react-icons/cg"

import { Collapse } from "baseUiComponents"
import { MenuLink, MenuItem } from "baseComponents"
import { Menu } from "@headlessui/react"

const SubMenuV = ({ menuItem }) => {
  return (
    <div className="relative has-subMenu menu-item" key={menuItem.id}>
      <Collapse menuItem={menuItem}>
        <ul className="flex menuItemGroup sub-menu">
          {menuItem.children.map((item) => (
            <MenuItem key={item.id} menuItem={item} />
          ))}
        </ul>
      </Collapse>
    </div>
  )
}

const SubMenuH = ({ menuItem }) => {
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

export const SubMenu = ({ menuItem, orientation }) => {
  return orientation === "H" ? (
    <SubMenuH menuItem={menuItem} />
  ) : (
    <SubMenuV menuItem={menuItem} />
  )
}
