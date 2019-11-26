/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'

const Image = ({ img }) => {
  return (
    !!img && (
      <Img fluid={img.imageFile.childImageSharp.fluid} alt={img.altText} />
    )
  )
}
export default Image
