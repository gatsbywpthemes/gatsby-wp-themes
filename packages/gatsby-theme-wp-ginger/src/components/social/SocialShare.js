/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import { Twitter, Facebook, Pinterest, Linkedin } from './icons'
import { FiShare2 } from 'react-icons/fi'
import { shareStyles } from '../../styles'

export const SocialShare = ({ url, title, media }) => {
  return (
    <>
      <span sx={shareStyles.titleicon} aria-label="Share on social networks">
        <FiShare2 />
      </span>

      <ul sx={shareStyles.list}>
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