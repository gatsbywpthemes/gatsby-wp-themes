import React, { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import clsx from "clsx"
import { GiHamburgerMenu as Hamburger } from "react-icons/gi"
import { MdClose as Close } from "react-icons/md"
import { Menu, Widget } from "baseComponents"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

export const SlideSidebar = ({ className, ...props }) => {
  const [open, setOpen] = useState(false)
  const { widgetAreas } = useThemeOptions()
  const widgets = widgetAreas.slideMenuWidgets || []

  return (
    <div className={clsx(className)} {...props}>
      <button aria-label="open menu">
        <Hamburger
          className={clsx("text-[24px] text-text dark:text-dark-text")}
          onClick={() => setOpen(true)}
        />
        <Transition show={open} as={Fragment}>
          <Dialog
            as="div"
            static
            className={clsx("fixed inset-0 overflow-hidden", "z-20")}
            open={open}
            onClose={setOpen}
          >
            <div className={clsx("absolute inset-0 overflow-hidden")}>
              {/* Overlay */}
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay
                  className={clsx(
                    "absolute inset-0",
                    "transition-opacity",
                    "bg-dark-bg bg-opacity-80"
                  )}
                />
              </Transition.Child>
              <div
                className={clsx(
                  "fixed inset-y-0 right-0",
                  "flex",
                  "max-w-full"
                )}
              >
                {/* Sliding panel */}
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div
                    className={clsx(
                      "relative",
                      "w-screen max-w-full md:max-w-md"
                    )}
                  >
                    {/* Panel content */}
                    <div
                      className={clsx(
                        "flex flex-col",
                        "h-screen",
                        "overflow-y-scroll",
                        "bg-mobileMenuBg dark:bg-dark-mobileMenuBg shadow"
                      )}
                    >
                      <div className="flex items-center justify-between px-4 py-2 border-b border-white">
                        <button className={clsx("")} aria-label="close menu">
                          <Close
                            className="text-[35px] text-white"
                            onClick={() => setOpen(false)}
                          />
                        </button>
                      </div>

                      <Menu orientation="V" mt={7} />
                      {widgets.map((widget, i) => (
                        <div key={i} sx={{ ".widget": { my: 10 } }}>
                          <Widget colorBg="dark" widget={widget} />
                        </div>
                      ))}
                    </div>
                    {/* End of panel content */}
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </button>
    </div>
  )
}
