import React from 'react'
import { FooterContent } from './index'
import { SocialFollows } from '../social'

export const Footer = () => (
  <footer>
    <div>
      <FooterContent />
      <div className="inverse">
        <SocialFollows />
      </div>
    </div>
  </footer>
)
