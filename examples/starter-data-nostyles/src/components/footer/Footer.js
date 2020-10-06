import React from 'react'
import { FooterContent } from './index'
import { SocialFollows } from '../social'

import { footerStyles, socialStyles } from '../../styles'

export const Footer = () => (
  <footer sx={{ ...footerStyles }}>
    <div sx={{ py: 0 }}>
      <FooterContent />
      <div className="inverse">
        <SocialFollows
          sx={{
            ...socialStyles.follow,
            display: 'flex',
            mt: `xs`,
            mb: 0,
          }}
        />
      </div>
    </div>
  </footer>
)
