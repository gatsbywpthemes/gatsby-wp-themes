import React from "react"
import { TaxonomyItem } from "./TaxonomyItem"
import clsx from "clsx"

export const Taxonomies = ({ post, taxName, singularName, ...props }) => {
  const taxonomies = post[taxName].nodes

  return (
    taxonomies.length > 0 && (
      <div className="flex flex-wrap items-center mb-3" {...props}>
        <div>
          <h3
            className={clsx(
              " text-sm text-text dark:text-dark-text leading-none capitalize font-normal font-body italic ",
              "rounded-full bg-infoBg dark:bg-dark-infoBg",
              "px-5 py-3 mr-2 mb-3  "
            )}
          >
            {taxonomies.length > 1 ? `${taxName} : ` : `${singularName} : `}
          </h3>
        </div>

        {taxonomies.map((cat) => (
          <TaxonomyItem
            key={cat.slug}
            taxName="category"
            item={cat}
            className="mx-2 mb-3 btn btn-secondary dark:btn-primary "
          />
        ))}
      </div>
    )
  )
}
