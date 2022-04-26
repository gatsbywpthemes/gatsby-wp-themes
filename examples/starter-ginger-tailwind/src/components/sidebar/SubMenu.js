import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import LinkItem from "./LinkItem";
import MenuItem from "./MenuItem";

export default function SubMenu({ menuItem }) {
  return (
    <>
      <Menu as="li" className="relative inline-block text-left">
        {({ open }) => (
          <Fragment>
            <LinkItem menuItem={menuItem} />
            <Menu.Button aria-label="Open menu item">
              {open ? <FiChevronDown /> : <FiChevronRight />}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="focus:outline-none">
                <ul className="px-1 py-1">
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
