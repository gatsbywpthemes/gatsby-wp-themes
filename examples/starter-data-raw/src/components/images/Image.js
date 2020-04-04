/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'

const Image = ({ img, style }) =>
  img && (
    <Img
      fluid={img.imageFile.childImageSharp.fluid}
      alt={img.altText}
      sx={style}
    />
  )

export default Image