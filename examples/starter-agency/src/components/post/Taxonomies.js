import React from "react"
import { TaxonomyItem } from "./TaxonomyItem"
import {
  IoFolderSharp as CatIcon,
  IoPricetags as TagIcon,
} from "react-icons/io5"

export const Taxonomies = ({ post, taxName, ...props }) => {
  const taxonomies = post[taxName].nodes

  return (
    taxonomies.length > 0 && (
      <div className="flex flex-wrap items-center mb-3" {...props}>
        {taxName === "categories" ? (
          <CatIcon className="mr-3" />
        ) : (
          <TagIcon className="mr-3" />
        )}

        {taxonomies.map((cat, index) => (
          <div key={cat.slug}>
            <TaxonomyItem
              taxName="category"
              item={cat}
              className="hover:text-highlight"
            />
            {index !== taxonomies.length - 1 && <span className="px-2">-</span>}
          </div>
        ))}
      </div>
    )
  )
}
