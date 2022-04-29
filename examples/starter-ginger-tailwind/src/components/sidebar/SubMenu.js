import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import LinkItem from "./LinkItem";
import MenuItem from "./MenuItem";

export default function SubMenu({ menuItem }) {
  return (
    <>
      <Menu
        as="li"
        className="relative flex flex-col text-left border-0 sub-menu"
      >
        {({ open }) => (
          <Fragment>
            <span className="flex justify-between w-full border-b  border-gray-100 border-opacity-40">
              <LinkItem menuItem={menuItem} />
              <Menu.Button
                className="hover:bg-[#0b5a5a] px-2 text-2xl"
                aria-label="Open menu item"
              >
                {open ? <FiChevronDown /> : <FiChevronRight />}
              </Menu.Button>
            </span>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items as={Fragment} className="focus:outline-none sub-menu">
                <ul>
                  {menuItem.children.map((item) => (
                    <Menu.Item key={item.id}>
                      <MenuItem key={item.id} menuItem={item} />
                    </Menu.Item>
                  ))}
                </ul>
              </Menu.Items>
            </Transition>
          </Fragment>
        )}
      </Menu>
    </>
  );
}
