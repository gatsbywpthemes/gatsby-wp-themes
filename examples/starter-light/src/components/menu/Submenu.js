import React, { Fragment, useEffect, useRef, useState } from "react"
import { CgChevronDown } from "react-icons/cg"
import { Collapse } from "../ui-components"
import { Menu, Transition } from "@headlessui/react"
import { MenuLink } from "./MenuLink"
import { MenuItem } from "./MenuItem"
import clsx from "clsx"

const SubmenuV = ({ menuItem }) => {
  return (
    <div className={`relative has-submenu menu-item `}>
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
    <Menu as="div" className={clsx(`menu-item`, `relative`, `flex`)}>
      <Menu.Button
        className={clsx(
          `inline-flex  items-center`,
          `focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-100 focus:ring-gray-100`
        )}
      >
        {menuItem.label}
        <CgChevronDown className={` ml-2 h-4 w-4`} aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            `origin-top-right absolute mt-12`,
            `bg-orange-200 w-56 px-3`,
            `ring-1 ring-black ring-opacity-5  focus:outline-none`
          )}
        >
          {menuItem.children.map((item) => (
            <div className="py-1">
              <Menu.Item key={item.id}>
                {({ active }) => <MenuLink menuItem={item} />}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
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
