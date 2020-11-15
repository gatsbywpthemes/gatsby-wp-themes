import React from 'react'
import Img from 'gatsby-image'

export const Image = ({ img }) => {
  return (
    !!img && (
      <Img fluid={img.node.localFile.childImageSharp.fluid} alt={img.altText} />
    )
  )
}
