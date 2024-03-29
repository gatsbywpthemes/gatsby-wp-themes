import React from "react"
import { TaxonomyItem } from "./TaxonomyItem"
import clsx from "clsx"

export const Taxonomies = ({ post, taxName, singularName, ...props }) => {
  const taxonomies = post[taxName].nodes

  return (
    taxonomies.length > 0 && (
      <div className="flex flex-wrap" {...props}>
        <h3 className={clsx("text-base font-normal mr-2")}>
          {taxonomies.length > 1 ? `${taxName} : ` : `${singularName} : `}
        </h3>

        {taxonomies.map((cat) => (
          <TaxonomyItem
            key={cat.slug}
            taxName="category"
            item={cat}
            className="mx-1 mb-3 btn btn-primary "
          />
        ))}
      </div>
    )
  )
}
