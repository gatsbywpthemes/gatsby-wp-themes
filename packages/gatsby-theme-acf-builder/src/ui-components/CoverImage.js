import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const CoverImage = ({
  image,
  loading = "lazy",
  className,
  ...props
}) => {
  return (
    <GatsbyImage
      loading={loading}
      image={image}
      className="w-full h-[400px] object-cover object-top"
    />
  )
}
