import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";

export const SlidePanelHorizontal = ({ children, open, setOpen }) => {
  return (
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
                "bg-black bg-opacity-80"
              )}
            />
          </Transition.Child>
          <div
            className={clsx("fixed inset-y-0 right-0", "flex", "max-w-full")}
          >
            {/* Sliding panel */}
            <Transition.Child
              as={Fragment}
              enter=" transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div
                className={clsx("relative", "w-screen max-w-full md:max-w-md")}
              >
                {children}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
