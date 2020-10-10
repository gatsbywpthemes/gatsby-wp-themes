import React from 'react'
import { Twitter, Facebook, Pinterest } from './icons'
import { FiShare2 } from 'react-icons/fi'

export const SocialShare = ({ url, title, media }) => {
  return (
    <>
      <h3>Share on social media</h3>
      <span>
        <FiShare2 />
      </span>

      <ul>
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
      </ul>
    </>
  )
}
