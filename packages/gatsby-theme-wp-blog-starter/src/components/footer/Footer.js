/** @jsx jsx */
import { Container, Footer as StyledFooter, jsx, Flex, Box } from 'theme-ui'
import FooterContent from './FooterContent'
import SocialFollow from '../social/SocialFollows'
import socialStyles from '../../styles/socialStyles'

const Footer = () => (
  <StyledFooter>
    <Container sx={{ py: 0 }}>
      <FooterContent />
      <Flex
        sx={{
          ...socialStyles.follow,
          mt: `xs`,
          mb: 0,
        }}
      >
        <Box className="inverse">
          <SocialFollow />
        </Box>
      </Flex>
    </Container>
  </StyledFooter>
)

export default Footer
