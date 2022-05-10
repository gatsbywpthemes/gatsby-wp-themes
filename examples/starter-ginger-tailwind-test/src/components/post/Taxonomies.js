import React from "react"
import { TaxonomyItem } from "./TaxonomyItem"
import clsx from "clsx"

export const Taxonomies = ({
  post,
  taxName,
  singularName,
  showTitle = true,
  ...props
}) => {
  const taxonomies = post[taxName].nodes

  return (
    taxonomies.length > 0 && (
      <div className="inline-flex space-x-1 font-bold" {...props}>
        {showTitle && (
          <div>
            <h3
              className={clsx(
                "italic text-base text-text dark:text-teal-900 leading-none capitalize font-normal",
                "rounded-md bg-infoBg dark:bg-dark-infoBg",
                "px-4 py-3 mr-4 mb-3 "
              )}
            >
              {taxonomies.length > 1 ? `${taxName} : ` : `${singularName} : `}
            </h3>
          </div>
        )}

        {taxonomies.map((cat, index) => (
          <>
            <TaxonomyItem
              key={cat.slug}
              taxName="category"
              item={cat}
              // className="mx-2 mb-3 btn btn-ghost "
            />
            {index !== taxonomies.length - 1 && <span>·</span>}
          </>
        ))}
      </div>
    )
  )
}
