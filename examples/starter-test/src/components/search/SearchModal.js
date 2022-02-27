import React, { useState, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { HiOutlineSearch as SearchIcon } from "react-icons/hi"
import { MdClose as Close } from "react-icons/md"
import { SearchForm } from "@gatsbywpthemes/gatsby-theme-wp-search/src/SearchForm"
import { SlidePanelVertical } from "@gatsbywpthemes/gatsby-theme-ui-components/src"
import clsx from "clsx"

export const SearchModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        aria-label="search"
        onClick={() => setOpen(true)}
        className="border-l cursor-pointer border-accentColor dark:border-dark-accentColor"
      >
        <SearchIcon
          className={`text-[24px] text-gray-600  dark:text-light  ml-3`}
        />
      </button>
      <SlidePanelVertical open={open} setOpen={setOpen}>
        <SearchForm setOpen={setOpen} />
      </SlidePanelVertical>
    </>
  )
}
