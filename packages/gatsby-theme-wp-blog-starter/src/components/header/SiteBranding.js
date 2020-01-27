/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const SiteBranding = ({ title }) => {
  return (
    <h1 sx={{ variant: `text.branding` }}>
      <a as={Link} to="/" rel="home">
        {title}
      </a>
    </h1>
  )
}

export default SiteBranding
