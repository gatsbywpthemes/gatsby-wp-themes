import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const Image = ({ img, loading = "lazy", ...props }) => {
  return img.localFile.gatsbyImage ? (
    <GatsbyImage
      loading={loading}
      image={img.localFile.gatsbyImage}
      alt={img.altText}
      {...props}
    />
  ) : (
    <img src={img.localFile.publicURL} alt={img.altText} {...props} />
  )
}
