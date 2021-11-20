import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const Image = ({ img, loading = "lazy", ...props }) => {
  return img?.childImageSharp ? (
    <GatsbyImage
      loading={loading}
      image={img.childImageSharp.gatsbyImageData}
      alt={img.altText}
      {...props}
    />
  ) : (
    <img src={img.sourceUrl} alt={img.altText} {...props} />
  )
}
