/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export const SiteBranding = ({ title }) => {
  return (
    <h1 sx={{ variant: `text.branding` }}>
      <Link to="/" rel="home">
        {title}
      </Link>
    </h1>
  )
}
