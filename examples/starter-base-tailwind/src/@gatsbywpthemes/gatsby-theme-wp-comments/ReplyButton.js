import React from "react"
import clsx from "clsx"

export const ReplyButton = (props) => {
  return (
    <button
      className="flex flex-col ml-auto text-xl text-center text-current transition duration-500 comment-button-reply text-upper-spaced group hover:text-primary"
      {...props}
    >
      <span>Reply</span>
      <div
        className={clsx(
          "h-[1px] w-full  bg-current mt-1",
          "transition duration-500 transform scale-x-0",
          "group-hover:scale-x-100"
        )}
      />
    </button>
  )
}
