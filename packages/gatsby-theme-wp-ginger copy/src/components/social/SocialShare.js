/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import Twitter from './icons/Twitter'
import Facebook from './icons/Facebook'
import Linkedin from './icons/Linkedin'
import Pinterest from './icons/Pinterest'
import { FiShare2 } from 'react-icons/fi'
import { share } from '../../styles/social'

const SocialShare = ({ url, title, media }) => {
  return (
    <>
      <span sx={share.titleicon} aria-label="Share on social networks">
        <FiShare2 />
      </span>

      <ul sx={share.list}>
        <li>
          <Twitter url={url} title={title}>
            Twitter
          </Twitter>
        </li>
        <li>
          <Facebook url={url} quote={title}>
            Facebook
          </Facebook>
        </li>
        <li>
          <Pinterest url={url} media={media}>
            Pinterest
          </Pinterest>
        </li>
        <li>
          <Linkedin url={url}>Linkedin</Linkedin>
        </li>
      </ul>
    </>
  )
}

export default SocialShare
