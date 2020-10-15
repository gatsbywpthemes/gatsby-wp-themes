import React from 'react'
import Img from 'gatsby-image'

export const Image = ({ img, style }) =>
  img && (
    <Img
      fluid={img.node.localFile.childImageSharp.fluid}
      alt={img.node.altText}
    />
  )
