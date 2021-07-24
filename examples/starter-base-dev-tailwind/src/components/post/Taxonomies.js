import React from "react"
import { TaxonomyItem } from "baseComponents"
import clsx from "clsx"

export const Taxonomies = ({ post, taxName, singularName, ...props }) => {
  const taxonomies = post[taxName].nodes

  return (
    taxonomies.length > 0 && (
      <div my={5} className="flex flex-wrap" {...props}>
        <h3
          className={clsx(
            "font-body font-sm italic rounded-md leading-tight capitalize",
            "bg-infoBg dark:bg-white-dark-infoBg",
            "px-4 py-2 mr-4 mb-3"
          )}
        >
          {taxonomies.length > 1 ? `${taxName} : ` : `${singularName} : `}
        </h3>

        {taxonomies.map((cat) => (
          <TaxonomyItem key={cat.slug} taxName="category" item={cat} />
        ))}
      </div>
    )
  )
}
