/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'

const SiteBranding = ({ title }) => {
  return (
    <Styled.h1 sx={{ variant: `text.branding` }}>
      <Styled.a as={Link} to="/" rel="home">
        {title}
      </Styled.a>
    </Styled.h1>
  )
}

export default SiteBranding
