/** @jsx jsx */
import { Container, jsx, Box } from 'theme-ui'
import FooterContent from './FooterContent'
import SocialFollow from '../social/SocialFollows'
import socialStyles from '../../styles/socialStyles'

const Footer = () => (
  <footer sx={{ variant: 'footer' }}>
    <Container sx={{ py: 0 }}>
      <FooterContent />
      <Box className="inverse">
        <SocialFollow
          sx={{
            ...socialStyles.follow,
            display: 'flex',
            mt: `xs`,
            mb: 0,
          }}
        />
      </Box>
    </Container>
  </footer>
)

export default Footer
