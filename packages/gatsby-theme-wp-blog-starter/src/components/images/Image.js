/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'

export const Image = ({ img, style }) =>
  img && (
    <Img
      fluid={img.localFile.childImageSharp.fluid}
      alt={img.altText}
      sx={style}
    />
  )
