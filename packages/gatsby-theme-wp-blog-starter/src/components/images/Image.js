/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'

export const Image = ({ img, style }) =>
  img && (
    <Img
      fluid={img.remoteFile.childImageSharp.fluid}
      alt={img.altText}
      sx={style}
    />
  )
