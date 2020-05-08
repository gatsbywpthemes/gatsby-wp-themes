/** @jsx jsx */
import { Container, jsx, Box } from 'theme-ui'
import { FooterContent } from './index'
import { SocialFollows } from '../social'
import socialStyles from '../../styles/socialStyles'

export const Footer = () => (
  <footer sx={{ variant: 'footer' }}>
    <Container sx={{ py: 0 }}>
      <FooterContent />
      <Box className="inverse">
        <SocialFollows
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
