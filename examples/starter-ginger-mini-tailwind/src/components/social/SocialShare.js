import React from "react"
import { Twitter, Facebook, Pinterest } from "./icons"
import { FiShare2 } from "react-icons/fi"
import clsx from "clsx"

export const SocialShare = ({ url, title, media }) => {
  return (
    <div
      className={clsx("flex flex-col justify-center items-center align-center")}
    >
      <h3 className="text-base uppercase sr-only">Share on social media</h3>
      <button className="flex justify-center my-2 cursor-pointer items-center w-8 h-8 bg-dark-bg text-white rounded-full">
        <FiShare2 className="text-sm" />
      </button>

      <div className="flex space-x-2 text-sm font-medium text-text dark:text-dark-text">
        <Twitter url={url} title={title} textStyle="link">
          <span className="uppercase tracking-widest">TWITTER</span>
        </Twitter>
        <span>/</span>
        <Facebook url={url} quote={title}>
          <span className="uppercase tracking-widest">FACEBOOK</span>
        </Facebook>
        <span>/</span>
        <Pinterest url={url} media={media}>
          <span className="uppercase tracking-widest">PINTEREST</span>
        </Pinterest>
      </div>
    </div>
  )
}
