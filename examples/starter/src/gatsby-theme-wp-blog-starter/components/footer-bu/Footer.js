import { Container, Footer as StyledFooter, jsx } from "theme-ui"
import FooterContent from "gatsby-theme-wp-blog-starter/src/components/footer/FooterContent"

const Footer = () => (
  <StyledFooter>
    <Container>
      <FooterContent />
      <h2>hello world</h2>
    </Container>
  </StyledFooter>
)

export default Footer
// /** @jsx jsx */
// import {jsx, Box} from 'theme-ui'

// import React from 'react'
// import Footer from 'gatsby-theme-wp-blog-starter/src/components/footer/Footer'

// export default props => <Box sx={{bg: `purple`}} ><Footer {...props}></Box>
