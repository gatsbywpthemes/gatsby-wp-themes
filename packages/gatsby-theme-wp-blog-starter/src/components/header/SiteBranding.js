/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export const SiteBranding = ({ title, ...props }) => {
  return (
    <h1 sx={{ variant: `text.branding` }} {...props}>
      <Link to="/" rel="home">
        {title}
      </Link>
    </h1>
  )
}
