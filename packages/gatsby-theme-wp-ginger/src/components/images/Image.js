/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'

const Image = ({ img }) => {
  return (
    !!img && (
      <Img fluid={img.remoteFile.childImageSharp.fluid} alt={img.altText} />
    )
  )
}
export default Image
