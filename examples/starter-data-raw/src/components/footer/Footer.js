/** @jsx jsx */
import { Container, Footer as StyledFooter, jsx, Flex, Box } from 'theme-ui'
import FooterContent from './FooterContent'
import SocialFollow from '../social/SocialFollows'

const Footer = () => (
  <StyledFooter>
    <Container>
      <FooterContent />
      <Box className="inverse">
        <Flex>
          <SocialFollow />
        </Flex>
      </Box>
    </Container>
  </StyledFooter>
)

export default Footer
