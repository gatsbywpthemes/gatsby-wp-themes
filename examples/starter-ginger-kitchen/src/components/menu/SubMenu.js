import React, { Fragment } from "react"
import { CgChevronDown } from "react-icons/cg"
import { Collapse } from "~/components/ui-components"
import { Menu, Transition } from "@headlessui/react"
import { MenuLink } from "./MenuLink"
import { MenuItem } from "./MenuItem"
import clsx from "clsx"

const SubmenuV = ({ menuItem }) => {
  return (
    <div className={`relative has-submenu menu-item !border-none`}>
      <Collapse
        trigger={menuItem.label}
        className="font-semibold border-b border-dashed text-sidebarColor dark:text-dark-sidebarColor"
      >
        <ul className="menuItemGroup sub-menu">
          {menuItem.children.map((item) => (
            <MenuItem
              key={item.id}
              menuItem={item}
              orientation="V"
              className="border-b border-dashed last:border-nonee"
            />
          ))}
        </ul>
      </Collapse>
    </div>
  )
}

const SubmenuH = ({ menuItem }) => {
  return (
    <Menu as="div" className={clsx("menu-item", "relative", "flex")}>
      <Menu.Button
        className={clsx(
          `inline-flex items-center font-semibold border-b border-dashed`
        )}
      >
        {menuItem.label}
        <CgChevronDown className={`ml-2 w-4 h-4`} aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            `subMenu`,
            `absolute mt-7 origin-top-right`,
            `rounded-lg`,
            `px-5 py-3 w-56`,
            `z-50`,
            `text-sidebarColor dark:text-dark-sidebarColor font-semibold`
            // `bg-subMenuBg dark:bg-dark-subMenuBg`
          )}
        >
          <div className="relative">
            <div className="absolute c-triangle-up text-subMenuBg dark:text-dark-subMenuBg -top-5"></div>
            {menuItem.children.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <MenuLink
                    menuItem={item}
                    className={` dark:hover:opacity-80 py-2 block`}
                  />
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export const Submenu = ({ menuItem, orientation }) => {
  // console.log({ menuItem })
  return orientation === "H" ? (
    <SubmenuH menuItem={menuItem} />
  ) : (
    <SubmenuV menuItem={menuItem} />
  )
}
