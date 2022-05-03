import React, { Fragment, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks";
import { SearchForm } from "@gatsbywpthemes/gatsby-theme-wp-search/src/SearchForm";
import Menu from "~/components/sidebar/Menu";
import WidgetsList from "../widgets/WidgetsList";

export default function SiteNavigation() {
  const [open, setOpen] = useState(false);
  const { addWordPressSearch } = useThemeOptions();

  return (
    <div>
      <button onClick={() => setOpen(true)} className="rounded-buttons">
        <FiMenu />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-50"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />
            </Transition.Child>
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="pointer-events-auto relative w-screen max-w-md ">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 flex pt-2 pr-8">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white text-2xl"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <FiX />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-[#076666] dark:bg-gray-800 py-6 px-10 shadow-xl text-white">
                    <div className="relative flex-1 mt-4 flex flex-col space-y-8">
                      <div className="flex flex-col">
                        <div className="search-form-nav">
                          {addWordPressSearch && <SearchForm />}
                        </div>
                        <Menu />
                      </div>
                      <WidgetsList />
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
